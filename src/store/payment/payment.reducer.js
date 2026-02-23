import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
};

const paymentReducer = createSlice({
  name: "paymentReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder,
});

export default paymentReducer.reducer;
