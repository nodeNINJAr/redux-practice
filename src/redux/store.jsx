import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import logger from "./middleware/looger";


export const store = configureStore({
    reducer : counterReducer,
    middleware:(getDefaultMiddleWare)=>getDefaultMiddleWare().concat(logger)
})