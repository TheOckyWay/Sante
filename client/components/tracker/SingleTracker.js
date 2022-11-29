import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleTracker } from "./trackerSlice";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

function SingleTracker() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const tracker = useSelector((state) => state.tracker.singleTracker);
  console.log(tracker);

  const {
    totalCalories,
    totalCarbs,
    totalFat,
    totalProtein,
    date,
    waterIntake,
  } = tracker;

  useEffect(() => {
    dispatch(fetchSingleTracker(id));
  }, []);

  return (
    <Container>
      {tracker ? (
        <Grid container>
          <Grid item container>
            <Grid item container textAlign="center" direction="column">
              <Card
                variant="outlined"
                sx={{ m: 2, bgcolor: "#f5f5f5", border: "1px solid #f5f5f5" }}
              >
                <Typography variant="h5" color="#000">
                  Date: {date}
                </Typography>
                <Typography variant="h5" color="#000">
                  Daily Calories: {totalCalories}
                </Typography>
                <Typography variant="h5" color="#000">
                  Protein: {totalProtein}
                </Typography>
                <Typography variant="h5" color="#000">
                  Carbs: {totalCarbs}
                </Typography>
                <Typography variant="h5" color="#000">
                  Fat: {totalFat}
                </Typography>
                <Typography variant="h5" color="#000">
                  Water: {waterIntake}
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid item container direction="column" textAlign="center">
            <Grid item>
              <Link to={`/trackers/${tracker.id}/add-food`}>
                <Button variant="contained" sx={{ width: "50%" }}>
                  Add Food
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to={`/trackers/${tracker.id}/add-water`}>
                <Button variant="contained" sx={{ width: "50%" }}>
                  Add Water
                </Button>
              </Link>
            </Grid>
            <Grid item>
              {tracker.recipes ? (
                tracker.recipes.map((recipe) => {
                  return (
                    <div key={recipe.id}>
                      <h2>{recipe.name}</h2>
                      <h3>{recipe.calories}</h3>
                      <hr />
                    </div>
                  );
                })
              ) : (
                <div></div>
              )}
            </Grid>
          </Grid>
        </Grid>
      ) : null}
    </Container>
  );
}

export default SingleTracker;
