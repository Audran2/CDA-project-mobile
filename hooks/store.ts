import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import favoritesReducer from './slice/userFavoriteSlice';
import userGameListReducer from './slice/userAverageListSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    favorites: favoritesReducer,
    userGameListAverage: userGameListReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;