import { createSlice } from "@reduxjs/toolkit";
import {
  createCampaigner,
  getCampainer,
  getLastestDonors,
  getMediaList,
  getSingleCampaignerDetails,
  getTempleDevotesList,
  getTopDonors,
} from "./campaigners.service";

const initialState = {
  topDonorsLoading: false,
  campainerLoading: false,
  lastestDonorsLoading: false,
  singleCampaignerLoading: false,
  templeDevotesLoading: false,
  createCampaignerLoading: false,
  mediaLoading: false,
  campaginers: [],
  topDonorsArr: [],
  lastestDonorsArr: [],
  templeDevotesList: [],
  mediaList: [],
  singleCampaignerDetails: {},
  campainersCount: 0,
  error: null,
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
      })
      .addCase(createCampaigner.pending, (state) => {
        state.createCampaignerLoading = true;
      })
      .addCase(createCampaigner.fulfilled, (state) => {
        state.createCampaignerLoading = false;
      })
      .addCase(createCampaigner.rejected, (state, { payload }) => {
        state.createCampaignerLoading = false;
        state.error = payload;
      })
      .addCase(getTempleDevotesList.pending, (state) => {
        state.templeDevotesLoading = true;
      })
      .addCase(getTempleDevotesList.fulfilled, (state, { payload }) => {
        state.templeDevotesLoading = false;
        state.templeDevotesList = payload;
      })
      .addCase(getTempleDevotesList.rejected, (state, { payload }) => {
        state.templeDevotesLoading = false;
        state.error = payload;
      })
      .addCase(getMediaList.pending, (state) => {
        state.mediaLoading = true;
      })
      .addCase(getMediaList.fulfilled, (state, { payload }) => {
        state.mediaLoading = false;
        state.mediaList = payload;
      })
      .addCase(getMediaList.rejected, (state, { payload }) => {
        state.mediaLoading = false;
        state.error = payload;
      }),
});

export default campaginersReducer.reducer;
