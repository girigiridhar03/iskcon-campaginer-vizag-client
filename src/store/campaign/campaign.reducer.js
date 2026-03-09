import { createSlice } from "@reduxjs/toolkit";
import {
  createCampaign,
  getCampaignsList,
  getCurrentCampaign,
} from "./campaign.service";

const initialState = {
  campainLoading: false,
  campaginListLoading: false,
  createCampaignLoading: false,
  campaginListArr: [],
  currentCampaign: {},
  total: 0,
  totalPages: 1,
  error: null,
};

const campaignReducer = createSlice({
  name: "campaignReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getCurrentCampaign.pending, (state) => {
        state.campainLoading = true;
      })
      .addCase(getCurrentCampaign.fulfilled, (state, { payload }) => {
        state.campainLoading = false;
        state.currentCampaign = payload;
      })
      .addCase(getCurrentCampaign.rejected, (state, { payload }) => {
        state.campainLoading = false;
        state.error = payload;
      })
      .addCase(getCampaignsList.pending, (state) => {
        state.campaginListLoading = true;
      })
      .addCase(getCampaignsList.fulfilled, (state, { payload }) => {
        state.campaginListLoading = false;
        state.campaginListArr = payload?.data;
        state.total = payload?.total;
        state.totalPages = payload?.totalPages;
      })
      .addCase(getCampaignsList.rejected, (state, { payload }) => {
        state.campaginListLoading = false;
        state.error = payload;
      })
      .addCase(createCampaign.pending, (state) => {
        state.createCampaignLoading = true;
      })
      .addCase(createCampaign.fulfilled, (state) => {
        state.createCampaignLoading = false;
      })
      .addCase(createCampaign.rejected, (state, { payload }) => {
        state.createCampaignLoading = false;
        state.error = payload;
      }),
});

export default campaignReducer.reducer;
