import {createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import Reducers from './reducers/index';

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['CounterReducer'],
    blacklist: [],
  },
  Reducers,
);

const store = createStore(persistedReducer);
let persistor = persistStore(store);

export {store, persistor};
