import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://todays-blog-server.vercel.app' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/blogs'
    }),
  }),
});

export const { useGetUsersQuery } = baseApi;

export default baseApi;
