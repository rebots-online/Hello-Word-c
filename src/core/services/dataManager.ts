import { IStorageService } from '../types/services';

const CREATE_CALENDAR_DAYS = `CREATE TABLE IF NOT EXISTS calendar_days(id INTEGER PRIMARY KEY, date TEXT, season INTEGER);`;
const CREATE_MASS_TEXTS = `CREATE TABLE IF NOT EXISTS mass_texts(id INTEGER PRIMARY KEY, date TEXT, latin TEXT, english TEXT, is_rubric INTEGER);`;
const CREATE_OFFICE_TEXTS = `CREATE TABLE IF NOT EXISTS office_texts(id INTEGER PRIMARY KEY, date TEXT, latin TEXT, english TEXT, is_rubric INTEGER);`;
const CREATE_VOICE_NOTES = `CREATE TABLE IF NOT EXISTS voice_notes(id TEXT PRIMARY KEY, date TEXT, title TEXT, filePath TEXT, duration INTEGER, transcription TEXT);`;

export class DataManager {
  constructor(private storage: IStorageService) {}

  async initialize() {
    await this.storage.initialize();
    await this.storage.executeQuery(CREATE_CALENDAR_DAYS);
    await this.storage.executeQuery(CREATE_MASS_TEXTS);
    await this.storage.executeQuery(CREATE_OFFICE_TEXTS);
    await this.storage.executeQuery(CREATE_VOICE_NOTES);
  }
}
