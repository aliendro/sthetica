import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const checApi = createApi({
  reducerPath: 'checApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.chec.io/v1',
    prepareHeaders: (headers) => {
      headers.set('X-Authorization', import.meta.env.VITE_CHEC_PK as string);
      return headers;
    },
  }),
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    getProductList: builder.query<Product[], void>({
      query: () => '/products',
      transformResponse: (response: ProductCollection) => response.data,
    }),
    getProduct: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
    }),
    getCart: builder.query<Cart, void>({
      query: () => '/carts',
    }),
    getCartById: builder.query<Cart, string>({
      query: (cartId) => `/carts/${cartId}`,
      providesTags: ['Cart'],
    }),
    addToCart: builder.mutation<void, { cartId: string; product: Product | LineItem }>({
      query: ({ cartId, product }) => ({
        url: `/carts/${cartId}`,
        method: 'POST',
        body: {
          id: (product as LineItem).product_id ? (product as LineItem).product_id : product.id,
        },
      }),
      invalidatesTags: ['Cart'],
    }),
    updateCart: builder.mutation<void, { cartId: string; product: LineItem; quantity: number }>({
      query: ({ cartId, product, quantity }) => ({
        url: `/carts/${cartId}/items/${product.id}`,
        method: 'PUT',
        body: {
          quantity,
        },
      }),
      invalidatesTags: ['Cart'],
    }),
    emptyCart: builder.mutation<void, string>({
      query: (cartId) => ({
        url: `/carts/${cartId}/items`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
    getCountries: builder.query<Locale, void>({
      query: () => '/services/locale/countries',
      transformResponse: (response: CountryList) => response.countries,
    }),
    getSubdivisions: builder.query<string[], string | void>({
      query: (countryCode) => `/services/locale/${countryCode}/subdivisions`,
      transformResponse: (response: StateList) => Object.keys(response.subdivisions),
    }),
    getCheckout: builder.query<CheckoutToken, string>({
      query: (cartId) => ({
        url: `/checkouts/${cartId}`,
        method: 'GET',
        params: {
          type: 'cart',
        },
      }),
    }),
    captureOrder: builder.query<Order, { checkoutId: string; body: CheckoutCapture }>({
      query: ({ checkoutId, body }) => ({
        url: `/checkouts/${checkoutId}`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetProductListQuery,
  useGetProductQuery,
  useGetCartQuery,
  useGetCartByIdQuery,
  useAddToCartMutation,
  useUpdateCartMutation,
  useEmptyCartMutation,
  useGetCountriesQuery,
  useGetSubdivisionsQuery,
  useGetCheckoutQuery,
  useLazyCaptureOrderQuery,
} = checApi;

export default checApi;
