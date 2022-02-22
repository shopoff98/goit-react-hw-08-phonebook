import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { filterSlice } from "./contacts/contacts-reducer";
import storage from "redux-persist/lib/storage";
import authSlice from "./contacts/auth/auth-slice";
import contactsSlice from "./contacts/contacts-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    auth: persistReducer(authPersistConfig, authSlice),
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
