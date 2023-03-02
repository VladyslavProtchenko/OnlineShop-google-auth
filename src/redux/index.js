import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import marketReducer from './slices/marketSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        market: marketReducer
    }
})