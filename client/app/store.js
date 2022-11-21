import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../components/auth/authSlice";
import recipesReducer from "../components/recipes/recipeSlice";
import trackerReducer from "../components/tracker/trackerSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		recipes: recipesReducer,
		tracker: trackerReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
export * from "../components/auth/authSlice";
