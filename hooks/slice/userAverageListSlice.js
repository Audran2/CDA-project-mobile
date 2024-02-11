import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  averageNote: 0,
  averageStatus: {
    inProgress: 0,
    completed: 0,
    abandoned: 0,
    pending: 0,
    planned: 0,
  },
  loading: false,
  error: null,
};

export const userGameListSlice = createSlice({
  name: "userGameList",
  initialState,
  reducers: {
    setAverageNote: (state, action) => {
      state.averageNote = action.payload;
      state.loading = false;
      state.error = null;
    },
    setAverageStatus: (state, action) => {
      state.averageStatus = action.payload;
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
  },
});

export const { setAverageNote, setAverageStatus, setLoading, setError } =
  userGameListSlice.actions;

export const selectAverageNote = (state) => state.userGameList.averageNote;
export const selectAverageStatus = (state) => state.userGameList.averageStatus;
export const selectLoading = (state) => state.userGameList.loading;
export const selectError = (state) => state.userGameList.error;

export default userGameListSlice.reducer;
