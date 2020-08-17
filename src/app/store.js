import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../slice/demo";
const rootReducer = {
    count: countReducer
}

export const store = configureStore({
    reducer: rootReducer
})