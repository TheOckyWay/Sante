import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('fetchUser', async (userId) => {
	const { data } = await axios.get(`/api/users/${userId}`);
	return data;
});


const profileSlice = createSlice({
	name: 'profile',
	initialState: {},
	reducers: {},
	extraReducers(builder){
		builder.addCase(fetchUser.fulfilled),
			(state, action) => {
				return action.payload;
			};
	},
});

export default profileSlice.reducer;