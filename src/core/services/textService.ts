import { BilingualText } from '../types/liturgical';
import { IStorageService } from '../types/services';

export class TextService {
  constructor(private storage: IStorageService) {}

  async getMassProper(date: string): Promise<BilingualText[]> {
    const sql = 'SELECT latin, english, is_rubric FROM mass_texts WHERE date = ?';
    const rows = await this.storage.executeQuery(sql, [date]);
    return rows.map((row: any) => ({
      latin: row.latin,
      english: row.english,
      isRubric: row.is_rubric === 1
    }));
  }
}
