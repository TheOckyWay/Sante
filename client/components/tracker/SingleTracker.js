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

  useEffect(() => {
    dispatch(fetchSingleTracker(id));
  }, []);

  return (
    <Container>
      {tracker ? (
        <Grid container>
          <Grid item container>
            <Grid item container textAlign="center" direction="column">
              <Card variant="outlined" sx={{ m: 2 }}>
                <Typography variant="h5">Tracker ID: {tracker.id}</Typography>
                <Typography variant="h5">Date: {tracker.date}</Typography>
                <Typography variant="h5">
                  Daily Calories: {tracker.totalCalories}
                </Typography>
                <Typography variant="h5">
                  Protein: {tracker.totalProtein}
                </Typography>
                <Typography variant="h5">
                  Carbs: {tracker.totalCarbs}
                </Typography>
                <Typography variant="h5">Fat: {tracker.totalFat}</Typography>
                <Typography variant="h5">
                  Daily Calories: {tracker.totalCalories}
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
          </Grid>
        </Grid>
      ) : null}
    </Container>
  );
}

export default SingleTracker;
