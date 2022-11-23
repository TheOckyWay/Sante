import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleTracker,fetchTrackers } from "../tracker/trackerSlice";
import Avatar from '@mui/material/Avatar';
import { Stack, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

/**
 * COMPONENT
 */
const Home = (props) => {
  const dispatch = useDispatch();
  
 
  
  const user = useSelector((state) => state.auth.me);
  const trackers = useSelector((state) => state.tracker.allTracker);
  let tracker = trackers[trackers.length-1]

  useEffect(() =>{
    dispatch(fetchTrackers())

    if (trackers.length){
      dispatch(fetchSingleTracker(tracker.id))
    }
   }, []);

  
   
  

  const {totalCalories, waterIntake, totalCarbs, totalProtein, totalFat, date} = useSelector((state) => state.tracker.singleTracker) 

    
if (trackers.length && tracker){
  return (
    <div>
    <Stack direction="column"
		justifycontent="space-evenly"
		alignitems="center"
    spacing={3}
    >


    <Stack
		direction="row"
		justifycontent="space-evenly"
		alignitems="center"
		spacing={1}
		>
    <Avatar sx={{ bgcolor: blue[900] }}>{user.firstName[0]}{user.lastName[0]}</Avatar>
		<Typography variant="h4">Welcome {user.username}!</Typography>
    </Stack>

    <Typography float= 'left' variant="h5"> Calories for Today({date}):</Typography>
    
    
    <Stack direction="row" border= '1px solid grey' width='100%'>
          <div direction='column' justifycontent='flex-end' alignitems='flex-end'>
          <Typography>Calories: {totalCalories}</Typography>
          <Typography>Protein:{totalProtein} </Typography>
          <Typography>Carbs:{totalCarbs} </Typography>
          <Typography>Fats:{totalFat} </Typography>
          </div>
    </Stack>
    <Stack direction="row" border= '1px solid grey' width='100%'>
          <div direction='column' justifycontent='flex-end' alignitems='flex-end'>
          <Typography>Water: {waterIntake}</Typography>
          </div>
    </Stack>


    </Stack>


      {/* <h1>{new Date}</h1>
      {tracker !== undefined ? (
        <div>
          <p>Total Calories: {tracker.totalCalories}</p>
          <p>Total Water: {tracker.waterIntake}</p>
          <p>Carbs: {tracker.totalCarbs}</p>
          <p>Protein: {tracker.totalProtein}</p>
          <p>Fat: {tracker.totalFat}</p>
        </div>
      ) : (
        <div>
          <h3>Welcome, {user.username}</h3>
          <p>No information to show at the moment</p>
        </div>
      )} */}
    </div>
  );
  }else{
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress color="success" />
      </Box>
    );
  }
};

export default Home;
