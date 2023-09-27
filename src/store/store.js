import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
