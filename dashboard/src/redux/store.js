import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "./widget/widgetSlice"

export const store = configureStore({
  reducer: widgetReducer,
});
