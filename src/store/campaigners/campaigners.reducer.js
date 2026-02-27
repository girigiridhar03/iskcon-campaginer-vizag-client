import { createSlice } from "@reduxjs/toolkit";
import {
  getCampainer,
  getLastestDonors,
  getSingleCampaignerDetails,
  getTopDonors,
} from "./campaigners.service";

const initialState = {
  error: null,
  campaginers: [],
  campainersCount: 0,
  campainerLoading: false,
  topDonorsArr: [],
  topDonorsLoading: false,
  lastestDonorsArr: [],
  lastestDonorsLoading: false,
  singleCampaignerDetails: {},
  singleCampaignerLoading: false,
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
      })
      .addCase(getTopDonors.pending, (state) => {
        state.topDonorsLoading = true;
      })
      .addCase(getTopDonors.fulfilled, (state, { payload }) => {
        state.topDonorsLoading = false;
        state.topDonorsArr = payload;
      })
      .addCase(getTopDonors.rejected, (state, { payload }) => {
        state.topDonorsLoading = false;
        state.error = payload;
      })
      .addCase(getLastestDonors.pending, (state) => {
        state.lastestDonorsLoading = true;
      })
      .addCase(getLastestDonors.fulfilled, (state, { payload }) => {
        state.lastestDonorsLoading = false;
        state.lastestDonorsArr = payload;
      })
      .addCase(getLastestDonors.rejected, (state, { payload }) => {
        state.lastestDonorsLoading = false;
        state.error = payload;
      })
      .addCase(getSingleCampaignerDetails.pending, (state) => {
        state.singleCampaignerLoading = true;
      })
      .addCase(getSingleCampaignerDetails.fulfilled, (state, { payload }) => {
        state.singleCampaignerLoading = false;
        state.singleCampaignerDetails = payload;
      })
      .addCase(getSingleCampaignerDetails.rejected, (state, { payload }) => {
        state.singleCampaignerLoading = false;
        state.error = payload;
      }),
});

export default campaginersReducer.reducer;
