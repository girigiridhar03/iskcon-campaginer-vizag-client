import { createSlice } from "@reduxjs/toolkit";
import { getCurrentCampaign } from "./campaign.service";

const initialState = {
  error: null,
  currentCampaign: {},
  campainLoading: false,
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
      }),
});

export default campaignReducer.reducer;
