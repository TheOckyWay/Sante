import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRecipes } from "./recipeSlice";

function Recipes() {
  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes.allRecipes);

  console.log(recipes);
  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return (
    <div>
      <div>
        {recipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                <h1>{recipe.name}</h1>
              </Link>
              <h2>{recipe.calories}</h2>
              <h2>{recipe.protein}</h2>
              <h2>{recipe.cuisin}</h2>
              <h2>{recipe.diet}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recipes;
