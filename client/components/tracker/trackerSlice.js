import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTrackers = createAsyncThunk('fetchTrackers', async () => {
	const { data } = await axios.get('/api/trackers');

	// o: remove before pushing to main or use debugger
	console.log(data);
	return data;
});

export const fetchSingleTracker = createAsyncThunk(
	'fetchSingleTracker',
	async (id) => {
		const { data } = await axios.get(`/api/trackers/${id}`);

		// o: remove before pushing to main or use debugger
		console.log(data);
		return data;
	}
);

const trackersSlice = createSlice({
	name: 'trackers',
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
	},
});

export default trackersSlice.reducer;
