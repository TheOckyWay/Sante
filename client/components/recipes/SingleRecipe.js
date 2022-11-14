import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleRecipe } from "./recipeSlice";

function SingleRecipe() {
  const dispatch = useDispatch();

  const { id } = useParams();

  // o: destructure
  const recipe = useSelector((state) => state.recipes.singleRecipes);

  useEffect(() => {
    dispatch(fetchSingleRecipe(id));
  }, []);

  return (
    <div>
      <div className="single-recipe">
        <img src={recipe.imageUrl} />
        <div>
          <h1>{recipe.name}</h1>
          <h3>Cooking Time: {recipe.cookTime}</h3>
          <h3>Calories: {recipe.calories}</h3>
          <h3>Diet: {recipe.diet}</h3>
          <h3>Protein: {recipe.protein}</h3>
          <h3>Carbohydrates: {recipe.carbs}</h3>
          <h3>Fat: {recipe.fat}</h3>
          <h3>Course Type: {recipe.courseType}</h3>
          <h3>Cuisine: {recipe.cuisine}</h3>
        </div>
      </div>
    </div>
  );
}

export default SingleRecipe;
