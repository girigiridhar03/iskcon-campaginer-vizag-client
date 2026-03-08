import { createSlice } from "@reduxjs/toolkit";
import { getDonations, getDonorDetailsObj } from "./donations.service";

const initialState = {
  getDonationsLoading: false,
  getDonorDetailsLoading: false,
  donorDetailsObj: {},
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
      })
      .addCase(getDonorDetailsObj.pending, (state) => {
        state.getDonationsLoading = true;
      })
      .addCase(getDonorDetailsObj.fulfilled, (state, { payload }) => {
        state.getDonationsLoading = false;
        state.donorDetailsObj = payload;
      })
      .addCase(getDonorDetailsObj.rejected, (state, { payload }) => {
        state.getDonationsLoading = false;
        state.error = payload;
      }),
});

export default donationReducer.reducer;
