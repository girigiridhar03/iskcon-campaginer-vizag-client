import { createSlice } from "@reduxjs/toolkit";
import { getCampainer } from "./campaigners.service";

const initialState = {
  error: null,
  campaginers: [],
  campainersCount: 0,
  campainerLoading: false,
};

const campaginersReducer = createSlice({
  name: "campaginerReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getCampainer.pending, (state) => {
        state.campainerLoading = true;
      })
      .addCase(getCampainer.fulfilled, (state, { payload }) => {
        state.campainerLoading = false;
        state.campaginers = payload?.campaigners;
        state.campainersCount = payload?.count;
      })
      .addCase(getCampainer.rejected, (state, { payload }) => {
        state.campainerLoading = false;
        state.error = payload;
      }),
});

export default campaginersReducer.reducer;
