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
  const updatedRecipes = recipes.filter((recipe) => recipe.name.length > 1);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return (
    <Container>
      <Typography variant="h4" textAlign="center" color="#000">
        Recipes
      </Typography>
      <Grid container sx={{ height: "100%" }}>
        {updatedRecipes.map((recipe) => {
          return (
            <Card
              key={recipe.id}
              sx={{ m: 2, width: "100%" }}
              variant="outlined"
              borderradius="15%"
            >
              <Grid item container key={recipe.id} marginTop="20px">
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <BreakpointedImg
                    style={{ borderRadius: "15%" }}
                    src={recipe.imageUrl}
                    width="100%"
                    height="100%"
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={6}
                  textAlign="center"
                  paddingLeft={10}
                  sx={{ p: 1 }}
                >
                  <Link to={`/recipes/${recipe.id}`}>
                    <h2 className="linkColor">{recipe.name}</h2>
                  </Link>
                  <Typography variant="h5" color="#000">
                    Cooking Time: {recipe.cookTime} Minutes
                  </Typography>
                  <Typography variant="h5" color="#000">
                    Calories: {recipe.calories}
                  </Typography>
                  <Typography variant="h5" color="#000">
                    Diet: {recipe.diet}
                  </Typography>
                  <Typography variant="h5" color="#000">
                    Protein: {recipe.protein}
                  </Typography>
                  <Typography variant="h5" color="#000">
                    Carbohydrates: {recipe.carbs}
                  </Typography>
                  <Typography variant="h5" color="#000">
                    Fat: {recipe.fat}
                  </Typography>
                  <Typography variant="h5" color="#000">
                    Course Type: {recipe.courseType}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Recipes;
