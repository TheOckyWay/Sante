import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { allRecipes: [], singleRecipes: {} };

export const fetchRecipes = createAsyncThunk("fetchRecipes", async () => {
	const { data } = await axios.get("/api/recipes");
	return data;
});

export const fetchSingleRecipe = createAsyncThunk(
	"fetchSingleRecipe",
	async (id) => {
		const { data } = await axios.get(`/api/recipes/${id}`);
		return data;
	}
);

export const addRecipe = createAsyncThunk("addRecipe", async (incomingData) => {
	const { data } = await axios.post("/api/recipes", incomingData);
	return data;
});

const recipesSlice = createSlice({
	name: "recipes",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchRecipes.fulfilled, (state, action) => {
			state.allRecipes = action.payload;
		});
		builder.addCase(fetchSingleRecipe.fulfilled, (state, action) => {
			state.singleRecipes = action.payload;
		});
		builder.addCase(addRecipe.fulfilled, (state, action) => {
			state.allRecipes.push(action.payload);
		});
	},
});

export default recipesSlice.reducer;
