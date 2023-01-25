import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const testAPI = createApi({
  reducerPath: 'testAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:7000/api/user',
  }),
  endpoints: builder => ({
    getUsers: builder.query({
      query: args => {
        const { limit, page } = args;
        return {
          url: `?page=${page}&limit=${limit}`,
        };
      },
    }),
  }),
});

export const { useGetUsersQuery } = testAPI;
