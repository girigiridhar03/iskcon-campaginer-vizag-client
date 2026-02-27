import api from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCampainer = createAsyncThunk(
  "getCampaigner",
  async (campaginId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/campaigner/${campaginId}?status=active`);
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.message || "Internal Server error");
    }
  },
);

export const getSingleCampaignerDetails = createAsyncThunk(
  "singleDetails",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/campaigner/details/${id}`);
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.message || "Internal Server error");
    }
  },
);

export const getTopDonors = createAsyncThunk(
  "topdonors",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/campaigner/topdonors/${id}`);
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.message || "Internal Server error");
    }
  },
);

export const getLastestDonors = createAsyncThunk(
  "lastestDonors",
  async ({ campId, campaignerId }, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `/campaigner/latestDonors/${campId}/${campaignerId}`,
      );
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.message || "Internal Server error");
    }
  },
);
