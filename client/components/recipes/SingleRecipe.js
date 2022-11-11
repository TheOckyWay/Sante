import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleRecipe } from "./recipeSlice";

function SingleRecipe() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const recipe = useSelector((state) => state.recipes.singleRecipes);

  useEffect(() => {
    dispatch(fetchSingleRecipe(id));
  }, []);

  return (
    <div>
      <div>
        <h1>{recipe.name}</h1>
        <h3>{recipe.calories}</h3>
        <h3>{recipe.protein}</h3>
        <h3>{recipe.cuisine}</h3>
        <h3>{recipe.diet}</h3>
      </div>
    </div>
  );
}

export default SingleRecipe;
