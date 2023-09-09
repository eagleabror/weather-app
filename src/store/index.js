import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "../slice/data";

export default configureStore({
    reducer: DataSlice,
    devTools: process.env.NODE_ENV !== 'production',
})