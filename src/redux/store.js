import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { currencyReducer } from './currency';
import { userReducer } from './user';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token', 'user'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    currency: currencyReducer,
    user: userReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
