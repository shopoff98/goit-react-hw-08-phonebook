import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const signUp = createAsyncThunk("auth/signup", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const logOut = createAsyncThunk("/auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("users/logout");
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});

export const getCurrentUser = createAsyncThunk(
  "auth/getuser",
  async (_, thunkAPI) => {
    const state = await thunkAPI.getState();
    const persistToken = await state.auth.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    await token.set(persistToken);
    const { data } = await axios.get("/users/current");
    return data;
  }
);
