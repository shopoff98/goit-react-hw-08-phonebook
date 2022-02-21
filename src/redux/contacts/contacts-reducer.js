import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
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
    signUpUser: builder.mutation({
      query(body) {
        return {
          url: "/users/signup",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Contacts"],
    }),
    loginUser: builder.mutation({
      query(body) {
        return {
          url: "/users/login",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Contacts"],
    }),
    logOut: builder.mutation({
      query(token) {
        return {
          url: "/users/logout",
          method: "POST",
          headers: { Authorization: token },
        };
      },
      invalidatesTags: ["Contacts"],
    }),
    getCurrentUser: builder.query({
      query() {
        return {
          url: "/users/current",
          prepareHeaders: (headers, { getState }) => {
            const token = getState().user.token;
            return headers.set("Authorization", token);
          },
        };
      },
      providesTags: ["Contacts"],
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
  useSignUpUserMutation,
  useLoginUserMutation,
  useLogOutMutation,
  useGetCurrentUserQuery,
} = contactsApi;
