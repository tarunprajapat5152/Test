import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://event-management-t96y.onrender.com",
  }),
  endpoints: (builder) => ({
    getOtp: builder.mutation({
      query: (email) => ({
        url: "/auth/signup-otp",
        method: "POST",
        body: { email },
      }),
    }),
    verifyOtp: builder.mutation({
      query: ({ email, otp }) => ({
        url: "/auth/otp-verify",
        method: "POST",
        body: {
          email,
          otp,
        },
      }),
    }),
    loginWithOtp: builder.mutation({
      query: (email) => ({
        url: "/auth/login-forget-otp",
        method: "POST",
        body: { email },
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    storeData: builder.mutation({
      query: ({ firstName, lastName, email, password }) => ({
        url: "/auth/signup",
        method: "POST",
        body: {
          firstName,
          lastName,
          email,
          password,
        },
      }),
    }),
    loginOtp: builder.mutation({
      query: (email) => ({
        url: "/auth/login-with-otp",
        method: "POST",
        body: {
          email,
        },
      }),
    }),
    updateData: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/login-update-password",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
    }),
    profileData: builder.mutation({
      query: (email) => ({
        url: "/organizer/check-status",
        method: "POST",
        body: email,
      }),
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/auth/update",
        method: "PUT",
        body: data,
      }),
    }),
    profilePic: builder.mutation({
      query: (email) => ({
        url: "/organizer/check-status",
        method: "POST",
        body: email,
      }),
    }),
    carouselInfo: builder.query({
      query: () => ({
        url: "/event/filter",
        method: "GET",
      }),
    }),
    blogSection: builder.query({
      query: () => ({
        url: "/blog/all",
        method: "GET",
      }),
    }),
    cartData: builder.mutation({
      query: ({ userEmail }) => ({
        url: "/cart/data",
        method: "POST",
        body: {
          userEmail,
        },
      }),
    }),
    becomeOrganizer: builder.mutation({
      query: ({ firstname, lastname, email, organizationName, details }) => ({
        url: "/organizer/apply",
        method: "POST",
        body: {
          firstname,
          lastname,
          email,
          organizationName,
          details,
        },
      }),
    }),
    removeEvent: builder.mutation({
      query: ({ eventUuid }) => ({
        url: `/cart/delete/${eventUuid}`,
        method: "DELETE",
        body: {},
      }),
    }),
    updateQuantity: builder.mutation({
      query: ({ addToCartUuid, ticketQuantity }) => ({
        url: "/cart/update",
        method: "PUT",
        body: {
          addToCartUuid,
          ticketQuantity,
        },
      }),
    }),

    checkStatus: builder.mutation({
      query: ({ email }) => ({
        url: "/organizer/check-status",
        method: "POST",
        body: {
          email,
        },
      }),
    }),

    addToCart: builder.mutation({
      query: ({eventUuid, userEmail, ticketQuantity}) => ({
        url: "/cart/add",
        method: "POST",
        body: {
          eventUuid, 
          userEmail, 
          ticketQuantity
        }
      })
    }),

    makePayment: builder.mutation({
      query: (cartItem) => ({
        url: 'user',
        method: 'POST',       // POST request
        body: cartItem,        // sending JSON body
      }),
    }),

    creareEvent: builder.mutation({
      query: (formData) => ({
        url: '/event/create-event',
        method: 'POST',
        body: formData
      })
    }),

    eventFilter: builder.query({
      query: () => ({
        url: "/event/filter",
        method: "GET"
      })
    }),

    registerFilter: builder.query({
      query: () => ({
        url: "/register-place/filter",
        method: "GET"
      })
    }),

    paymentApi: builder.mutation({
      query: (email) => ({
        url: "/api/payment/create-payment-intent",
        method: "POST",
        headers: {
          'Content-Type': 'application/json', // Set the expected Content-Type
        },
        body: JSON.stringify({ email })
      })
    })
  }),
});

export const {
  useGetOtpMutation,
  useVerifyOtpMutation,
  useStoreDataMutation,
  useLoginUserMutation,
  useLoginWithOtpMutation,
  useUpdateDataMutation,
  useLoginOtpMutation,
  useProfilePicMutation,
  useCarouselInfoQuery,
  useBlogSectionQuery,
  useUpdateProfileMutation,
  useProfileDataMutation,
  useCartDataMutation,
  useBecomeOrganizerMutation,
  useRemoveEventMutation,
  useUpdateQuantityMutation,
  useCheckStatusMutation,
  useAddToCartMutation,
  useMakePaymentMutation,
  useCreareEventMutation,
  useEventFilterQuery,
  useRegisterFilterQuery,
  usePaymentApiMutation
} = postsApi;
