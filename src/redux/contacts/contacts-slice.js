// import { createSlice } from "@reduxjs/toolkit";
// import {
//   getContacts,
//   createContact,
//   deleteContact,
//   updateContact,
// } from "./contacts-operations";
// const initialState = {
//   contacts: [],
//   contact: {
//     id: "",
//     name: "",
//     number: "",
//   },
//   isLoading: false,
// };

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState,
//   extraReducers: {
//     [getContacts.fulfilled](state, { payload }) {
//       state.contacts = [...payload];
//     },
//     [createContact.fulfilled](state, { payload }) {
//       state.contact.id = payload.id;
//       state.contact.name = payload.name;
//       state.contact.number = payload.number;
//       state.contacts = [state.contact, ...state.contacts];
//     },
//     [deleteContact.fulfilled](state, { payload }) {
//       state.contacts = state.contacts.filter((item) => item.id !== payload);
//       state.isLoading = false;
//     },
//     [deleteContact.pending](state) {
//       state.isLoading = true;
//     },
//     [updateContact.fulfilled](state, { payload }) {
//       state.contact = payload;
//     },
//   },
// });

// export const filterSlice = createSlice({
//   name: "filter",
//   initialState: "",
//   reducers: {
//     filter: (_, { payload }) => payload,
//   },
// });

// export default contactsSlice.reducer;
