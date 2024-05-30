import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["products"],
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
} = baseApi;
