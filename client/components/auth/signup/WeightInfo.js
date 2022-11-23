import React, { useState } from "react";
import {
	Box,
	Typography,
	Grid,
	TextField,
	OutlinedInput,
	FormControl,
	InputAdornment,
} from "@mui/material";
import LoseWeight from "./WeightLossOptions/LoseWeight";
import GainWeight from "./WeightLossOptions/GainWeight";

// update the user created in basinInfo component
// User.update({
//	currentWeight,
//  targetWeight,
//  targetChange,
//})

function WeightInfo({ activeStep }) {
	const [currentWeight, setCurrentWeight] = useState(0);
	const [targetWeight, setTargetWeight] = useState(0);

	const handleCurrentWeightChange = (event) => {
		setCurrentWeight(event.target.value);
	};

	const handleTargetWeightChange = (event) => {
		setTargetWeight(event.target.value);
	};

	if (activeStep === 1) {
		return (
			<div>
				<Grid container spacing={2}>
					<Grid item xs={3} />
					<Grid item xs={6}>
						<Typography align="center" variant="h5">
							What is your current weight?
						</Typography>
					</Grid>
					<Grid item xs={3} />

					<Grid item xs={4} />
					<Grid item xs={4}>
						<Box
							display="flex"
							sx={{
								ml: 11,
							}}
						>
							<FormControl sx={{ m: 1, width: "15ch" }} variant="outlined">
								<OutlinedInput
									id="outlined-adornment-weight"
									value={currentWeight}
									onChange={handleCurrentWeightChange}
									endAdornment={
										<InputAdornment position="end">lbs</InputAdornment>
									}
									aria-describedby="outlined-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
								/>
							</FormControl>
						</Box>
					</Grid>
					<Grid item xs={4} />

					<Grid item xs={3} />
					<Grid item xs={6}>
						<Typography align="center" variant="h5">
							What is your target weight?
						</Typography>
					</Grid>
					<Grid item xs={3} />

					<Grid item xs={4} />
					<Grid item xs={4}>
						<Box
							display="flex"
							sx={{
								ml: 11,
							}}
						>
							<FormControl sx={{ m: 1, width: "15ch" }} variant="outlined">
								<OutlinedInput
									id="outlined-adornment-weight"
									value={targetWeight}
									onChange={handleTargetWeightChange}
									endAdornment={
										<InputAdornment position="end">lbs</InputAdornment>
									}
									aria-describedby="outlined-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
								/>
							</FormControl>
						</Box>
					</Grid>
					<Grid item xs={4} />
				</Grid>
			</div>
		);
	} else if (activeStep === 2) {
		if (parseInt(targetWeight) - parseInt(currentWeight) < 0) {
			return <LoseWeight />;
		} else if (parseInt(targetWeight) - parseInt(currentWeight) > 0) {
			return <GainWeight />;
		}
	}
}

export default WeightInfo;
