import {createMigrate, PersistConfig} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const migrate = createMigrate({3: () => undefined, 4: () => undefined});

export const persistConfigRoot: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  version: 4.02,
  migrate,
};
