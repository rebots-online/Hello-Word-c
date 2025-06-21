import { Platform } from 'react-native';
import { IStorageService } from '../core/types/services';
import { NativeStorageService } from './native/sqliteStorage';
import { WebStorageService } from './web/indexedDbStorage';

export function createStorageService(): IStorageService {
  if (Platform.OS === 'web') {
    return new WebStorageService();
  }
  return new NativeStorageService();
}
