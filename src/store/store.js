import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slicer/todoSlice";
export const store = configureStore({
  reducer: {
    // Add the reducer here
    todo: todoReducer,
  },
});
