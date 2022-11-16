import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRecipes } from "./recipeSlice";

function Recipes() {
  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes.allRecipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      <div id="all-recipes">
        {recipes.map((recipe) => {
          return (
            <div key={recipe.id} className="all-recipes-single-recipe">
              <img src={recipe.imageUrl} />
              <div>
                <Link to={`/recipes/${recipe.id}`}>
                  <h2>{recipe.name}</h2>
                </Link>
                <h3>Cooking Time: {recipe.cookTime}</h3>
                <h3>Calories: {recipe.calories}</h3>
                <h3>Diet: {recipe.diet}</h3>
                <h3>Protein: {recipe.protein}</h3>
                <h3>Carbohydrates: {recipe.carbs}</h3>
                <h3>Fat: {recipe.fat}</h3>
                <h3>Course Type: {recipe.courseType}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recipes;
