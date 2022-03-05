import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ["Contacts"],
    }),
    addContact: builder.mutation({
      query(contact) {
        return {
          url: "/contacts",
          method: "POST",
          body: contact,
        };
      },
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query(id) {
        return {
          url: `/contacts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Contacts"],
    }),
    patchContact: builder.mutation({
      query(id, contact) {
        return {
          url: `/contacts/${id}`,
          method: "PATCH",
          body: contact,
        };
      },
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filter: (_, { payload }) => payload,
  },
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  usePatchContactMutation,
} = contactsApi;
