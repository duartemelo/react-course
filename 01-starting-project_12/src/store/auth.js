import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticaded: false,
  },
  reducers: {
    login(state) {
      state.isAuthenticaded = true;
    },
    logout(state) {
      state.isAuthenticaded = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;