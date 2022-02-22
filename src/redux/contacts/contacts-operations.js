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

export const getContacts = createAsyncThunk(
  "contacts/getcontacts",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    token.set(persistToken);
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const createContact = createAsyncThunk(
  "contacts/createcontacts",
  async ({ name, number }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await axios.post("/contacts", { name, number });
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/update",
  async (id, body, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = axios.patch(`/contacts/${id}`, body);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
