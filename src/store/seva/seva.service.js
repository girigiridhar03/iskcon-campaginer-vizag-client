import api from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSevaList = createAsyncThunk(
  "sevaList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/seva");

      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.message || "Internal Server error");
    }
  },
);
