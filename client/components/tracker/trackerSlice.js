import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrackers = createAsyncThunk("fetchTrackers", async () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const { data } = await axios.get("/api/trackers", {
        headers: { authorization: token },
      });
      return data;
    } catch (err) {
      console.error(err);
      return err.message;
    }
  }
});

export const fetchSingleTracker = createAsyncThunk(
  "fetchSingleTracker",
  async (id) => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { data } = await axios.get(`/api/trackers/${id}`, {
          headers: { authorization: token },
        });
        return data;
      } catch (err) {
        // console.error(err);
        return err.message;
      }
    }
  }
);

export const addToSingleTracker = createAsyncThunk(
  "addToSingleTracker",
  async (incomingData) => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { id } = incomingData;
        const { data } = await axios.put(`/api/trackers/${id}`, incomingData, {
          headers: { authorization: token },
        });
        return data;
      } catch (err) {
        console.error(err);
        return err.message;
      }
    }
  }
);

const trackersSlice = createSlice({
  name: "trackers",
  initialState: {
    allTracker: [],
    singleTracker: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrackers.fulfilled, (state, action) => {
      state.allTracker = action.payload;
    });
    builder.addCase(fetchSingleTracker.fulfilled, (state, action) => {
      state.singleTracker = action.payload;
    });
    builder.addCase(addToSingleTracker.fulfilled, (state, action) => {
      state.singleTracker = action.payload;
    });
  },
});

export default trackersSlice.reducer;
