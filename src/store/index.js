import {combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from './reducers/userReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

if (process.env.NODE_ENV === "development") {
  // AsyncStorage.removeItem("persist:root");
}


const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
});

let store = createStore(rootReducer);
let persistor = persistStore(store);

export {store, persistor};
