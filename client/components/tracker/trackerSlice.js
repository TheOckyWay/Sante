import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrackers = createAsyncThunk("fetchTrackers", async () => {
  try {
    const { data } = await axios.get("/api/trackers");
    return data;
  } catch (err) {
    console.error(err);
    return err.message;
  }
});

export const fetchSingleTracker = createAsyncThunk(
  "fetchSingleTracker",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/trackers/${id}`);
      return data;
    } catch (err) {
      console.error(err);
      return err.message;
    }
  }
);

export const addToSingleTracker = createAsyncThunk(
  "addToSingleTracker",
  async (incomingData) => {
    try {
      const { id } = incomingData;
      const { data } = await axios.post(
        `/api/trackers/${id}/add-to-tracker`,
        incomingData
      );
    } catch (err) {
      console.error(err);
      return err.message;
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
