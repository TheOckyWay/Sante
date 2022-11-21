import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRecipes } from "./recipeSlice";
import { Container, Typography, Grid, Card, Box, styled } from "@mui/material";

function Recipes() {
  const dispatch = useDispatch();
  const BreakpointedImg = styled("img")(({ theme }) => ({
    // below the MUI default breakpoint "sm" which is 600px
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "50%",
    },
  }));

  const recipes = useSelector((state) => state.recipes.allRecipes);


  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return (
    <Container>
      <Typography variant="h1" textAlign="center">
        Recipes
      </Typography>
      <Grid container>
        {/* <Grid item>
          <Typography variant="h1">Recipes</Typography>
        </Grid> */}
        {recipes.map((recipe) => {
          return (
            <Grid item container key={recipe.id} marginTop="20px">
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <BreakpointedImg
                  style={{ borderRadius: "15%" }}
                  src={recipe.imageUrl}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6} textAlign="center">
                <Link to={`/recipes/${recipe.id}`}>
                  <h2>{recipe.name}</h2>
                </Link>
                <Typography variant="h5">
                  Cooking Time: {recipe.cookTime} Minutes
                </Typography>
                <Typography variant="h5">
                  Calories: {recipe.calories}
                </Typography>
                <Typography variant="h5">Diet: {recipe.diet}</Typography>
                <Typography variant="h5">Protein: {recipe.protein}</Typography>
                <Typography variant="h5">
                  Carbohydrates: {recipe.carbs}
                </Typography>
                <Typography variant="h5">Fat: {recipe.fat}</Typography>
                <Typography variant="h5">
                  Course Type: {recipe.courseType}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Recipes;
