import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/slices/chartSlice";

export const store = configureStore({
  reducer: {
    chart: counterReducer,
  },
});
