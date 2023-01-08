import { configureStore } from "@reduxjs/toolkit";
import { testAPI } from "./../rtkAPIs/index";
import { setupListeners } from "@reduxjs/toolkit/query";
import ToasterSlice from "../reducers/ToasterSlice";

const store = configureStore({
  reducer: {
    [testAPI.reducerPath]: testAPI.reducer,
    toaster: ToasterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
