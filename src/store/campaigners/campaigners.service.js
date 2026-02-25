import api from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCampainer = createAsyncThunk(
  "getCampaigner",
  async (campaginId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/campaigner/${campaginId}?status=active`);
      console.log(response?.data?.data);
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.message || "Internal Server error");
    }
  },
);
