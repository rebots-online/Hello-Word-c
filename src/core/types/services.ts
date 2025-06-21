export interface IStorageService {
  initialize(): Promise<void>;
  executeQuery(sql: string, params?: any[]): Promise<any>;
  transaction(cb: () => Promise<void>): Promise<void>;
}

export interface IAudioRecorder {
  record(): Promise<void>;
  stop(): Promise<void>;
  play(filePath: string): Promise<void>;
}

export interface IDeviceInfo {
  getPlatform(): string;
  isFoldable(): boolean;
}
