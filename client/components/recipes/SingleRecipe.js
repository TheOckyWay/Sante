import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleRecipe } from "./recipeSlice";
import {
  fetchSingleTracker,
  addToSingleTracker,
} from "../tracker/trackerSlice";
import {
  Container,
  Typography,
  Grid,
  Card,
  Button,
  Box,
  CardContent,
} from "@mui/material";

function SingleRecipe() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const recipe = useSelector((state) => state.recipes.singleRecipes);
  const {
    imageUrl,
    name,
    cookTime,
    calories,
    diet,
    protein,
    carbs,
    fat,
    courseType,
    cuisine,
  } = recipe;

  const tracker = useSelector((state) => state.tracker.singleTracker);

  const addToTrackerButton = async (id) => {
    const newFood = {
      id: recipe.id,
      foodName: recipe.name,
      calories: recipe.calories,
      protein: recipe.protein,
      carbs: recipe.carbs,
      fat: recipe.fat,
      courseType: recipe.courseType,
    };
    await dispatch(addToSingleTracker({ id, newFood }));
  };

  useEffect(() => {
    dispatch(fetchSingleRecipe(id));
    dispatch(fetchSingleTracker(tracker.id));
  }, []);

  return (
    <Container>
      <Grid container direction="column">
        <Grid item display="flex" flexDirection="column">
          <Typography variant="h4" textAlign="center">
            {name}
          </Typography>
          {/* button temporarily here */}
          <Button
            onClick={() => addToTrackerButton(tracker.id)}
            variant="contained"
            sx={{ width: "45", margin: "0 auto" }}
          >
            Add to Tracker
          </Button>
        </Grid>
        <Grid
          item
          container
          sx={{ width: "50vw", height: "50vh", alignSelf: "center" }}
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
        >
          <Box
            component="img"
            src={imageUrl}
            sx={{
              borderRadius: "15%",
              width: "100%",
              height: "100%",
              textAlign: "center",
            }}
          />
        </Grid>
        <Grid item>
          <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
            <Box gridColumn="span 2" justifyContent="space-around">
              <Box
                variant="paper"
                display="flex"
                direction="row"
                justifyContent="space-around"
                marginTop="20px"
              >
                <Typography variant="h6">
                  Cooking Time: {cookTime} Minutes
                </Typography>
                <Typography variant="h6">Calories: {calories}</Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2" textAlign="center" flexDirection="column">
              <Card variant="outlined">
                <Typography variant="h6">Diet: {diet}</Typography>
                <Typography variant="h6">Protein: {protein}</Typography>
                <Typography variant="h6">Carbohydrates: {carbs}</Typography>
                <Typography variant="h6">Fats: {fat}</Typography>
                <Typography variant="h6">Course Type: {courseType}</Typography>
                <Typography variant="h6">Cuisine: {cuisine}</Typography>
              </Card>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SingleRecipe;
