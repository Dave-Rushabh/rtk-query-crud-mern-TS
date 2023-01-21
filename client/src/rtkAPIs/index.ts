import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

export const testAPI = createApi({
  reducerPath: 'testAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:7000/api/user',
  }),
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => '', //limit => `?limit=${limit}`,
    }),
  }),
})

export const { useGetTodosQuery } = testAPI
