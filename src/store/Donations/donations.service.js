import api from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDonations = createAsyncThunk(
  "donations/getDonations",
  async (obj, { rejectWithValue }) => {
    const { page, pageSize, id, campId, search } = obj;

    let url = `/donations?page=${page}&pageSize=${pageSize}`;

    if (id) {
      url += `&id=${id}`;
    }

    if (campId) {
      url += `&campId=${campId}`;
    }

    if (search?.trim()) {
      url += `&search=${search}`;
    }

    try {
      const response = await api.get(url);

      return response?.data?.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Internal Server Error");

      return rejectWithValue(
        error.response?.data?.message || "Internal Server Error",
      );
    }
  },
);
