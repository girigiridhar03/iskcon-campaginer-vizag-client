import { createSlice } from "@reduxjs/toolkit";
import { getDonations } from "./donations.service";

const initialState = {
  getDonationsLoading: false,
  getDonationsArr: [],
  totalDonations: 0,
  totalPages: 1,
  error: null,
};

export const donationReducer = createSlice({
  name: "donationReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getDonations.pending, (state) => {
        state.getDonationsLoading = true;
      })
      .addCase(getDonations.fulfilled, (state, { payload }) => {
        state.getDonationsLoading = false;
        state.getDonationsArr = payload?.data;
        state.totalPages = payload?.pagination?.pages;
        state.totalDonations = payload?.pagination?.total;
      })
      .addCase(getDonations.rejected, (state, { payload }) => {
        state.getDonationsLoading = false;
        state.error = payload;
      }),
});

export default donationReducer.reducer;
