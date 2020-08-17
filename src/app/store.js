import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../slice/demo";
import GioHangReducer from "../slice/GioHangSlice";
const rootReducer = {
  count: countReducer,
  GioHangReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
