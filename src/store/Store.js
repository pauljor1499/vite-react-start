import { configureStore } from "@reduxjs/toolkit";
import StaffData from "./slices/StaffData";

export const Store = configureStore({
    reducer: {
        StaffData: StaffData.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
