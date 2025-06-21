import SQLite from 'react-native-sqlite-storage';
import { IStorageService } from '../../core/types/services';

export class NativeStorageService implements IStorageService {
  private db: SQLite.SQLiteDatabase | null = null;

  async initialize() {
    this.db = await SQLite.openDatabase({ name: 'sanctissimissa.db', location: 'default' });
  }

  async executeQuery(sql: string, params: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db?.transaction(tx => {
        tx.executeSql(sql, params,
          (_, result) => resolve(result.rows.raw()),
          (_, error) => {
            reject(error);
            return false;
          });
      });
    });
  }

  async transaction(cb: () => Promise<void>) {
    if (!this.db) return;
    await this.db.transaction(async () => {
      await cb();
    });
  }
}
