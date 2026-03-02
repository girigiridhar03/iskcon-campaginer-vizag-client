import { createSlice } from "@reduxjs/toolkit";
import { getSevaList } from "./seva.service";

const initialState = {
  sevaLoading: false,
  error: null,
  sevaList: [],
};

export const sevaReducer = createSlice({
  name: "sevaReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getSevaList.pending, (state) => {
        state.sevaLoading = true;
      })
      .addCase(getSevaList.fulfilled, (state, { payload }) => {
        state.sevaLoading = false;
        state.sevaList = payload;
      })
      .addCase(getSevaList.rejected, (state, { payload }) => {
        state.error = payload;
        state.sevaLoading = false;
      }),
});

export default sevaReducer.reducer;
