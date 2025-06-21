import Dexie from 'dexie';
import { IStorageService } from '../../core/types/services';

class WebDB extends Dexie {
  calendar_days!: Dexie.Table<any, number>;
  mass_texts!: Dexie.Table<any, number>;
  office_texts!: Dexie.Table<any, number>;
  voice_notes!: Dexie.Table<any, string>;
}

export class WebStorageService implements IStorageService {
  private db = new WebDB('sanctissimissa');

  async initialize() {
    this.db.version(1).stores({
      calendar_days: '++id, date, season',
      mass_texts: '++id, date',
      office_texts: '++id, date',
      voice_notes: 'id, date'
    });
  }

  async executeQuery(): Promise<any> {
    throw new Error('NotImplemented');
  }

  async transaction(cb: () => Promise<void>): Promise<void> {
    await this.db.transaction('rw', this.db.calendar_days, this.db.mass_texts, this.db.office_texts, this.db.voice_notes, cb);
  }
}
