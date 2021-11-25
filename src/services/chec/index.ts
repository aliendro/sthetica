import { ProductCollection } from '@chec/commerce.js/features/products';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const checApi = createApi({
  reducerPath: 'checApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.chec.io/v1',
    prepareHeaders: (headers) => {
      headers.set('X-Authorization', import.meta.env.VITE_PK as string);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProductList: builder.query<Product[], void>({
      query: () => '/products',
      transformResponse: (response: ProductCollection) => response.data,
    }),
    getProduct: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductListQuery, useGetProductQuery } = checApi;

export default checApi;
