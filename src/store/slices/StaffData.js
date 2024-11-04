import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const StaffData = createSlice({
    name: "StaffData",
    initialState: {
        staffData: null,
        hasErrors: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {},
});

export default StaffData;
