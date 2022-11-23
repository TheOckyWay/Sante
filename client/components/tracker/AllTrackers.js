import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTrackers } from "./trackerSlice";
import SingleTracker from "./SingleTracker";
import {
  Container,
  Typography,
  Grid,
  Card,
  Button,
  Box,
  Stack,
} from "@mui/material";

function AllTracker() {
  const dispatch = useDispatch();

  const trackers = useSelector((state) => state.tracker.allTracker);

  useEffect(() => {
    dispatch(fetchTrackers());
  }, []);

  return (
    <Container>
      <Typography variant="h4" textAlign="center" color="#000">
        Trackers
      </Typography>
      <Stack textAlign="center">
        {trackers.map((tracker) => {
          return (
            <Card
              key={tracker.id}
              variant="outlined"
              sx={{ m: 2, bgcolor: "#f5f5f5", border: "1px solid #f5f5f5" }}
            >
              <Link to={`/trackers/${tracker.id}`}>
                <h2 className="linkColor">{`${tracker.date}`}</h2>
              </Link>
              <Typography variant="h5" color="#000">
                Total Daily Calories: {tracker.totalCalories}
              </Typography>
            </Card>
          );
        })}
      </Stack>
    </Container>
  );
}

export default AllTracker;
