// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
    getPostById: builder.query({
      query: (id) => {
        console.log("ID:", id);
        return {
          url: `posts/${id}`,
          method: "GET",
        };
      },
    }),
    getPostByLimit: builder.query({
      query: (num) => {
        console.log("LIMIT NUM:", num);
        return {
          url: `posts?_limit=${num}`,
          method: "GET",
        };
      },
    }),
    getDeleteById: builder.mutation({
      query: (id) => {
        console.log("Deleted ID:", id);
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
    }),
    createPost: builder.mutation({
      query: (newPost) => {
        console.log("New Post:", newPost);
        return {
          url: "posts",
          method: "POST",
          body: newPost,
          header: {
            "Content-Type": "application/json",
            charset: "utf8",
          },
        };
      },
    }),
    updatePost: builder.mutation({
      query: (updatePost) => {
        const { id, ...data } = updatePost;
        console.log("this is updated Post:", data);
        return {
          url: `posts/${id}`,
          method: "PUT",
          body: data,
          header: {
            "Content-Type": "application/json",
            charset: "utf8",
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useGetDeleteByIdMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} = postApi;
