import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*
  CONSTANT VARIABLES
*/
const TOKEN = "token";

/*
  THUNKS
*/
export const me = createAsyncThunk("auth/me", async () => {
	const token = window.localStorage.getItem(TOKEN);
	try {
		if (token) {
			const res = await axios.get("/auth/me", {
				headers: {
					authorization: token,
				},
			});
			return res.data;
		} else {
			return {};
		}
	} catch (err) {
		if (err.response.data) {
			return thunkAPI.rejectWithValue(err.response.data);
		} else {
			return "There was an issue with your request.";
		}
	}
});

export const authenticateLogin = createAsyncThunk(
	"auth/authenticate",
	async ({ username, password, method }, thunkAPI) => {
		try {
			const res = await axios.post(`/auth/${method}`, {
				username,
				password,
			});
			window.localStorage.setItem(TOKEN, res.data.token);
			thunkAPI.dispatch(me());
		} catch (err) {
			if (err.response.data) {
				return thunkAPI.rejectWithValue(err.response.data);
			} else {
				return "There was an issue with your request.";
			}
		}
	}
);

export const authenticateSignup = createAsyncThunk(
	"auth/authenticate",
	async ({ values, method }, thunkAPI) => {
		try {
			const {
				username,
				password,
				firstName,
				lastName,
				email,
				age,
				sex,
				startingWeight,
				targetWeight,
				targetChange,
				activityStatus,
				height,
			} = values;

			const res = await axios.post(`/auth/${method}`, {
				username,
				password,
				firstName,
				lastName,
				email,
				age,
				sex,
				startingWeight,
				targetWeight,
				targetChange,
				activityStatus,
				height,
				currentWeight: startingWeight,
			});

			window.localStorage.setItem(TOKEN, res.data.token);
			thunkAPI.dispatch(me());
		} catch (err) {
			if (err.response.data) {
				return thunkAPI.rejectWithValue(err.response.data);
			} else {
				return "There was an issue with your request.";
			}
		}
	}
);

export const editProfile = createAsyncThunk(
	"auth/profile",
	async ({
		targetChange,
		activityFactor,
		targetCalories,
		age,
		currentWeight,
		targetWater,
		currentHeight,
		startingWeight,
	}) => {
		const token = window.localStorage.getItem(TOKEN);
		try {
			if (token) {
				const { data } = await axios.put(
					"/auth/profile",
					{
						targetChange,
						activityFactor,
						targetCalories,
						age,
						currentWeight,
						targetWater,
						currentHeight,
						startingWeight,
					},
					{
						headers: {
							authorization: token,
						},
					}
				);
				return data;
			}
		} catch (err) {
			if (err.response.data) {
				return thunkAPI.rejectWithValue(err.response.data);
			} else {
				return "There was an issue with your request.";
			}
		}
	}
);

/*
  SLICE
*/
export const authSlice = createSlice({
	name: "auth",
	initialState: {
		me: {},
		error: null,
	},
	reducers: {
		logout(state, action) {
			window.localStorage.removeItem(TOKEN);
			state.me = {};
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(me.fulfilled, (state, action) => {
			state.me = action.payload;
		});
		builder.addCase(me.rejected, (state, action) => {
			state.error = action.error;
		});
		builder.addCase(authenticateLogin.rejected, (state, action) => {
			state.error = action.payload;
		});
		builder.addCase(editProfile.fulfilled, (state, action) => {
			state.me = action.payload;
		});
	},
});

/*
  ACTIONS
*/
export const { logout } = authSlice.actions;

/*
  REDUCER
*/
export default authSlice.reducer;
