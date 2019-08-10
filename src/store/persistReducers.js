import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'cubomovies',
      storage,
      whitelist: ['movie'],
    },
    reducers
  );

  return persistedReducer;
};
