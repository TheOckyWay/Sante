import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleRecipe } from "./recipeSlice";
import {
  fetchSingleTracker,
  addToSingleTracker,
  fetchTrackers,
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
  const trackers = useSelector((state) => state.tracker.allTracker);

  const padTo2Digits = (num) => {
    return num.toString().padStart(2, 0);
  };

  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  }

  const todayTracker = trackers.filter(
    (tracker) => tracker.date === formatDate(new Date())
  );

  const todayTrackerId = todayTracker[0];

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
    dispatch(fetchTrackers());
    dispatch(fetchSingleRecipe(id));
    if (todayTrackerId) {
      dispatch(fetchSingleTracker(todayTrackerId.id));
    }
  }, []);

  return (
    <Container>
      {todayTrackerId ? (
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4" textAlign="center">
              {name}
            </Typography>
            <img
              src={imageUrl}
              style={{ borderRadius: "15%" }}
              width="100%"
              height="100%"
            />
          </Grid>
          <Grid item>
            <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
              <Box
                gridColumn="span 2"
                display="flex"
                justifyContent="space-around"
              >
                <Typography variant="h5">
                  Cooking Time: {cookTime} Minutes
                </Typography>
                <Typography variant="h5">Calories: {calories}</Typography>
              </Box>
              <Box
                gridColumn="span 2"
                textAlign="center"
                flexDirection="column"
              >
                <Typography variant="h5">Diet: {diet}</Typography>
                <Typography variant="h5">Protein: {protein}</Typography>
                <Typography variant="h5">Carbohydrates: {carbs}</Typography>
                <Typography variant="h5">Fat: {fat}</Typography>
                <Typography variant="h5">Course Type: {courseType}</Typography>
                <Typography variant="h5">Cuisine: {cuisine}</Typography>
                <Button
                  onClick={() => addToTrackerButton(tracker.id)}
                  variant="contained"
                >
                  Add to Tracker
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <h1>Something</h1>
      )}
    </Container>
  );
}

export default SingleRecipe;
