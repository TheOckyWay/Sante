import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import { fetchUser,weightGoalChange } from './profileSlice';
import { editProfile, me } from "../auth/authSlice";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import createStatsCollector from 'mocha/lib/stats-collector';

function Profile() {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.auth.me);
	console.log(user)
	 
	const [weightGoal, setWeightGoal] = React.useState(user.targetChange);
	const [activity, setActivity] = React.useState(user.activityFactor);

		

  const handleWeightGoalChange = (event) => {
	// event.preventDefault()
	setWeightGoal(event.target.value)
	const userUpdate=  weightGoal
	dispatch(editProfile({targetChange: userUpdate}))
	dispatch(me())
    
  };

  const handleActivityChange = (event) => {
	// event.preventDefault()
	setActivity(event.target.value)
	const userUpdate=  activity 
	dispatch(editProfile({activityFactor: userUpdate}))
  };

	

	useEffect(() => {
		dispatch(fetchUser(user.id));
	}, []);




	//BMR calculations
	let weight = user.currentWeight / 2.205 //lbs to kg
	let height = user.currentHeight * 2.54 // inch to cm
	let Userage = user.age
	let sex = user.sex // 'male' or 'female'

	let BMR=0
	if (user.sex === 'male'){
		BMR = 66.5 + (13.75 *weight)+(5.003*height)-(6.75*Userage)
	}else if(user.sex=== 'female'){
		BMR =  655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * Userage)
	}
	
	if (user.targetChange==='Maintain'){
		BMR = weight*15
	}else if (user.targetChange==='Lose Weight'){
		BMR = weight*12
	}else if (user.targetChange==='Gain Weight'){
		BMR = weight*18
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
	let water = 0
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


	//component
	return (
		<Stack
		direction="column"
		justifyContent="space-evenly"
		alignItems="center"
		spacing={1}
		>
		<Box>
		<h3>Userame: {user.username}</h3>
		<h3>Name: {user.firstName} {user.lastName}</h3>
		<h3>Location: {user.location}</h3>
		<h3>Email: {user.email}</h3>
		</Box>

		

		<Stack  direction="row" >

		<FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Weight Goal</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
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


	  <FormControl sx={{ m: 1, minWidth: 120 }}>
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
		
		
		<Box>
		<h3>Weight Goal:  {user.targetChange}</h3>
		<h3>Activity Factor: {user.activityFactor}</h3>
		<h3>Starting Weight: {user.startingWeight}</h3>
		<h3>Current Weight: {user.currentWeight}</h3>
		<h3>Target Weight: {user.targetWeight}</h3>
		<h3>Target Calories: {Math.ceil(BMR)}</h3>
		<h3>Target Water: {water}</h3>
		</Box>


		
			
		</Stack>
	);
}

export default Profile;
