export interface IStorageService {
  initialize(): Promise<void>;
  executeQuery(sql: string, params?: any[]): Promise<any>;
  transaction<T>(callback: () => Promise<T>): Promise<T>;
}

export interface IAudioRecorder {
  record(): Promise<void>;
  stop(): Promise<string>;
  play(filePath: string): Promise<void>;
}

export interface IDeviceInfo {
  getPlatform(): string;
  isFoldable(): boolean;
}
