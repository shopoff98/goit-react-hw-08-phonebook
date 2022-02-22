import { createSlice } from "@reduxjs/toolkit";
import { signUp, login, logOut } from "./auth-operations";

const initialState = {
  user: { email: "", userName: "" },
  token: null,
  isLoggedIn: false,
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
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, { payload }) {
      state.userName = payload.name;
      state.email = payload.email;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
