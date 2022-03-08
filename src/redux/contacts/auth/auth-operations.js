import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const signUp = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      toast.success("Sign up success");
      return data;
    } catch (error) {
      toast.error("Sign up error");
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);
      toast.success("Login success");
      return data;
    } catch (error) {
      toast.error("Login error");
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk("/auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("users/logout");
    token.unset();
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue();
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
