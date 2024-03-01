"use client";

import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./feature/Api/baseApi";
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch)

export default store;
