import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    addToCart: build.mutation({
      query: (body) => ({
        url: `/cart`,
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddToCartMutation
} = extendedApi;
