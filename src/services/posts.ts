import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../interfaces';

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    prepareHeaders(headers) {
      headers.set('Content-Type', 'application/json');
    },
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => 'posts',
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetAllPostsQuery, useDeletePostMutation } = postsApi;
