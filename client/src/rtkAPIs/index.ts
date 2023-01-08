import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const testAPI = createApi({
  reducerPath: "testAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/todos",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (limit) => `?_limit=${limit}`,
    }),
  }),
});

export const { useGetTodosQuery } = testAPI;
