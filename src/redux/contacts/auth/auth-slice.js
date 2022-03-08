import { createSlice } from "@reduxjs/toolkit";
import { signUp, login, logOut, getCurrentUser } from "./auth-operations";

const initialState = {
  user: { email: "", userName: "" },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signUp.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, { payload }) {
      state.user.userNameame = payload.name;
      state.user.email = payload.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user.userName = "";
      state.user.email = "";
      state.token = null;
      state.isLoggedIn = false;
    },
    [getCurrentUser.rejected](state, { payload }) {
      state.isLoading = false;
    },
    [getCurrentUser.pending](state) {
      state.isLoading = true;
    },
    [getCurrentUser.fulfilled](state, { payload }) {
      state.user.userName = payload.name;
      state.user.email = payload.email;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
