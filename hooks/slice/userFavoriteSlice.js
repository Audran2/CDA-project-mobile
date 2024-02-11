import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: null,
  loading: false,
  error: null,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearFavorites: (state) => {
      state.favorites = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setFavorites, setLoading, setError, clearFavorites } =
  favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.favorites;
export const selectLoading = (state) => state.favorites.loading;
export const selectError = (state) => state.favorites.error;

export default favoritesSlice.reducer;
