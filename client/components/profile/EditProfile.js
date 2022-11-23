import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, Typography } from '@mui/material';
import { fetchUser } from './profileSlice';
import { editProfile, me } from "../auth/authSlice";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { logout } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';


const EditProfile = () => {

    const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.auth.me);
	const [weightGoal, setWeightGoal] = React.useState(user.targetChange);
	const [activity, setActivity] = React.useState(user.activityFactor);
    const [weight, setWeight] = React.useState(user.currentWeight);
    const [startingWeight, setstartingWeight] = React.useState(user.startingWeight);
    const [age, setAge] = React.useState(user.age);
    const [heights, setheights] = React.useState(user.currentHeight);

  const handleWeightGoalChange = (event) => {
	setWeightGoal(event.target.value)
  };
  const handleStartingWeightChange = (event) => {
	setstartingWeight(event.target.value)
  };
  const handleActivityChange = (event) => {
	setActivity(event.target.value)
  };
  const handleWeightChange = (event) => {
	setWeight(event.target.value)
  };
  const handleAgeChange = (event) => {
	setAge(event.target.value)
  };
  const handleHeightsChange = (event) => {
	setheights(event.target.value)
  };
  console.log(weight)
        let BMR=0
        let water = 0
      let weights = user.currentWeight / 2.205 //lbs to kg
      let height = user.currentHeight * 2.54 // inch to cm
      let Userage = user.age
  
      
      if (user.sex === 'male'){
          BMR = 66.5 + (13.75 *weights)+(5.003*height)-(6.75*Userage)
      }else if(user.sex=== 'female'){
          BMR =  655.1 + (9.563 * weights) + (1.850 * height) - (4.676 * Userage)
      }
      
      if (user.targetChange==='Maintain'){
          BMR = weights*15
      }else if (user.targetChange==='Lose Weight'){
          BMR = weights*12
      }else if (user.targetChange==='Gain Weight'){
          BMR = weights*18
      }
  
      if (user.activityFactor === 'Lightly Active'){
          BMR = BMR *1.375
      }else if (user.activityFactor === 'Sedentary'){
          BMR = BMR*1.2
      }else if (user.activityFactor === 'Moderately Active'){
          BMR = BMR*1.55
      }else if (user.activityFactor === 'Very Active'){
          BMR = BMR*1.725
      }else if (user.activityFactor === 'Extra Active'){
          BMR = BMR*1.9
      }
      
      
      
      //target water calc
      
      if (Userage<8){
          water = 1700
      }else if(Userage>8 && Userage<18 && user.sex === 'female'){
          water = 2300
      }else if(Userage>19 && user.sex === 'female'){
          water = 2700
      }else if(Userage>8 && Userage<18 && user.sex === 'male'){
          water = 3300
      }else if(Userage>19 && user.sex === 'male'){
          water = 3700
      }

  const handleChange = (event) =>{
	dispatch(editProfile({targetChange: weightGoal,activityFactor: activity, age: parseInt(age), currentWeight: parseInt(weight),targetCalories: Math.ceil(BMR), targetWater: water, currentHeight: heights, startingWeight: startingWeight  }))
    navigate('/profile')
  };
  return (
<div>

    <FormControl sx={{ width: '100%' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={startingWeight}
            onChange={handleStartingWeightChange}
            endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text"> Starting Weight</FormHelperText>
    </FormControl>

    <FormControl sx={{ width: '100%' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={weight}
            onChange={handleWeightChange}
            endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text"> Current Weight</FormHelperText>
    </FormControl>

    <FormControl sx={{ width: '100%' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={age}
            onChange={handleAgeChange}
            endAdornment={<InputAdornment position="end">Years</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">Current Age</FormHelperText>
    </FormControl>

    <FormControl sx={{ width: '100%' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={heights}
            onChange={handleHeightsChange}
            endAdornment={<InputAdornment position="end">Inches</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text"> Current Height</FormHelperText>
    </FormControl>

    <Stack  direction="row" sx={{marginTop: 1, minWidth: 120 }}>
    <FormControl sx={{ minWidth: 120 }}>
    <InputLabel>Weight Goal</InputLabel>
    <Select
      value={weightGoal}
      label="Weight Goal"
      onChange={handleWeightGoalChange}
    >
      <MenuItem value={'Maintain Weight'}>Maintain Weight</MenuItem>
      <MenuItem value={'Lose Weight'}>Lose Weight</MenuItem>
      <MenuItem value={'Gain Weight'}>Gain Weight</MenuItem>
    </Select>
    <FormHelperText>Edit Weight Goal</FormHelperText>
      </FormControl>

      <FormControl sx={{minWidth: 120 }}>
    <InputLabel>Activity Factor</InputLabel>
    <Select
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      value={activity}
      label="Activity Factor"
      onChange={handleActivityChange}
    >
      <MenuItem value={'Sedentary'}>Sedentary</MenuItem>
      <MenuItem value={'Lightly Active'}>Lightly Active</MenuItem>
      <MenuItem value={'Moderately Active'}>Moderately Active</MenuItem>
      <MenuItem value={'Very Active'}>Very Active</MenuItem>
      <MenuItem value={'Extra Active'}>Extra Active</MenuItem>
    </Select>
    <FormHelperText>Edit Activity Factor</FormHelperText>
      </FormControl>

    </Stack>
    
  
    <Button
    variant="outlined"
          onClick={() => {
            handleChange()
          }}>Confirm Changes
    </Button>
    </div>
  )
}

export default EditProfile