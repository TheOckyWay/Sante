import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../components/auth/authSlice";
import recipesReducer from "../components/recipes/recipeSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    recipes: recipesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
export * from "../components/auth/authSlice";
