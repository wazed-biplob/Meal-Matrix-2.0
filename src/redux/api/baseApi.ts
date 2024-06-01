import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mm-server-20-wazedbiplobs-projects.vercel.app/",
  }),
  tagTypes: ["products", "comments"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    postProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: "/product/edit",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),

    getDonorReviews: builder.query({
      query: () => ({
        url: "/donor-reviews",
        method: "GET",
      }),
    }),
    donateSupply: builder.mutation({
      query: (data) => ({
        url: "/product/donate",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
    getDonors: builder.query({
      query: () => ({
        url: "/donor-details",
        method: "GET",
      }),
    }),

    getVolunteers: builder.query({
      query: () => ({
        url: "/volunteers",
        method: "GET",
      }),
    }),
    registerVolunteerAccount: builder.mutation({
      query: (data) => ({
        url: "/register-volunteer",
        method: "POST",
        body: data,
      }),
    }),

    postTestimonial: builder.mutation({
      query: (data) => ({
        url: "/post-testimonial",
        method: "POST",
        body: data,
      }),
    }),
    getComments: builder.query({
      query: () => ({
        url: "/comments",
        method: "GET",
      }),
      providesTags: ["comments"],
    }),
    postComments: builder.mutation({
      query: (data) => ({
        url: "/post-comments",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),

    register: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetDonorReviewsQuery,
  useLoginMutation,
  useRegisterMutation,
  usePostProductMutation,
  useDonateSupplyMutation,
  useDeleteProductMutation,
  useGetDonorsQuery,
  useGetCommentsQuery,
  usePostCommentsMutation,
  useUpdateProductMutation,
  usePostTestimonialMutation,
  useGetVolunteersQuery,
  useRegisterVolunteerAccountMutation,
} = baseApi;
