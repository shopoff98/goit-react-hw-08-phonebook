import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { contactsApi } from "./contacts/contacts-reducer";
import { filterSlice } from "./contacts/contacts-reducer";
import storage from "redux-persist/lib/storage";
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

const middlewarePers = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: [contactsApi.reducerPath],
  storage,
  whitelist: [`mutations`],
};

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: persistReducer(
      authPersistConfig,
      contactsApi.reducer
    ),
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    contactsApi.middleware,
  ],
  middlewarePers,
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
