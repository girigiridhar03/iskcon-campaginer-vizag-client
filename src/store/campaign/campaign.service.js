import api from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrentCampaign = createAsyncThunk(
  "currentCampaign",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/campaign?status=active");
      console.log(response?.data?.data);
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.message || "Internal Server error");
    }
  },
);
