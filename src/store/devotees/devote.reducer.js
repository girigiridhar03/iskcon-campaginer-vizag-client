import { createSlice } from "@reduxjs/toolkit";
import {
  addDevote,
  deleteDevote,
  getDevoteList,
  getSingleDevotee,
  updateDevotee,
} from "./devote.service";

const initialState = {
  devoteeLoading: false,
  addDevoteLoading: false,
  deleteDevoteLoading: false,
  singleDevoteeLoading: false,
  devoteeListArr: [],
  singleDevoteeDetails: {},
  error: null,
};

export const devoteReducer = createSlice({
  name: "devoteReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getDevoteList.pending, (state) => {
        state.devoteeLoading = true;
      })
      .addCase(getDevoteList.fulfilled, (state, { payload }) => {
        state.devoteeLoading = false;
        state.devoteeListArr = payload;
      })
      .addCase(getDevoteList.rejected, (state, { payload }) => {
        state.devoteeLoading = false;
        state.error = payload;
      })
      .addCase(addDevote.pending, (state) => {
        state.addDevoteLoading = true;
      })
      .addCase(addDevote.fulfilled, (state) => {
        state.addDevoteLoading = false;
      })
      .addCase(addDevote.rejected, (state, { payload }) => {
        state.addDevoteLoading = false;
        state.error = payload;
      })
      .addCase(deleteDevote.pending, (state) => {
        state.deleteDevoteLoading = true;
      })
      .addCase(deleteDevote.fulfilled, (state) => {
        state.deleteDevoteLoading = false;
      })
      .addCase(deleteDevote.rejected, (state, { payload }) => {
        state.deleteDevoteLoading = false;
        state.error = payload;
      })
      .addCase(updateDevotee.pending, (state) => {
        state.addDevoteLoading = true;
      })
      .addCase(updateDevotee.fulfilled, (state) => {
        state.addDevoteLoading = false;
      })
      .addCase(updateDevotee.rejected, (state, { payload }) => {
        state.addDevoteLoading = false;
        state.error = payload;
      })
      .addCase(getSingleDevotee.pending, (state) => {
        state.singleDevoteeLoading = true;
      })
      .addCase(getSingleDevotee.fulfilled, (state, { payload }) => {
        state.singleDevoteeLoading = false;
        state.singleDevoteeDetails = payload;
      })
      .addCase(getSingleDevotee.rejected, (state, { payload }) => {
        state.singleDevoteeLoading = false;
        state.error = payload;
      }),
});

export default devoteReducer.reducer;
