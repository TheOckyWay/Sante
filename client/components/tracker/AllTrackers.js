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
  Tabs,
  Tab,
} from "@mui/material";


function AllTracker() {
  const dispatch = useDispatch();

  const trackers = useSelector((state) => state.tracker.allTracker);
  let sortArray =  [...trackers]
  sortArray.sort((a,b)=>{
    return a.id-b.id
  })

  useEffect(() => {
    dispatch(fetchTrackers());
  }, []);

  const weekday = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function day(tracker) {
    const d = new Date(tracker);
    let day = weekday[d.getDay()];
    let months = month[d.getMonth()];

    if (tracker[8] + tracker[9] !== "11" && tracker[9] === "1") {
      return `${day}, ${months} ${tracker.slice(8)}st`;
    } else if (tracker[8] + tracker[9] !== "12" && tracker[9] === "2") {
      return `${day}, ${months} ${tracker.slice(8)}nd`;
    } else if (tracker[8] + tracker[9] !== "13" && tracker[9] === "3") {
      return `${day}, ${months} ${tracker.slice(8)}rd`;
    } else {
      return `${day}, ${months} ${tracker.slice(8)}th`;
    }
  }

  return (
    <Container>
      <Typography variant="h4" textAlign="center" className="linkColor">
        Trackers
      </Typography>
      <Stack textAlign="center" sx={{ pb: 5 }}>
        {sortArray.map((tracker) => {
          return (
            <Typography
              key={tracker.id}
              variant="outlined"
              sx={{
                m: 2,
                border: "2px solid #313131",
                backgroundColor: "#242424",
                textAlign: "center",
                pb: 2,
                borderRadius: 5,
                boxShadow: 6,
              }}
            >
              <Stack sx={{}}>
                <Link to={`/trackers/${tracker.id}`}>
                  <h2 className="textcolor">{`${day(tracker.date)}`}</h2>
                </Link>
                <Typography variant="h5" color="rgb(156 163 175)">
                  Total Daily Calories:{" "}
                  <span className="yellowcolor">
                    {tracker.totalCalories}cal
                  </span>
                </Typography>
              </Stack>
            </Typography>
          );
        })}
      </Stack>
    </Container>
  );
}

export default AllTracker;
