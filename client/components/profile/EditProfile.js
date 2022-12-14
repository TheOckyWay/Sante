import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import { editProfile } from "../auth/authSlice";
import {
	Button,
	MenuItem,
	FormControl,
	Select,
	FormHelperText,
	OutlinedInput,
	InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.auth.me);
	const [weightGoal, setWeightGoal] = React.useState(user.targetChange);
	const [activity, setActivity] = React.useState(user.activityFactor);
	const [weight, setWeight] = React.useState(user.currentWeight);
	const [startingWeight, setstartingWeight] = React.useState(
		user.startingWeight
	);
	const [age, setAge] = React.useState(user.age);
	const [heights, setheights] = React.useState(user.currentHeight);

	const handleWeightGoalChange = (event) => {
		setWeightGoal(event.target.value);
	};
	const handleStartingWeightChange = (event) => {
		setstartingWeight(event.target.value);
	};
	const handleActivityChange = (event) => {
		setActivity(event.target.value);
	};
	const handleWeightChange = (event) => {
		setWeight(event.target.value);
	};
	const handleAgeChange = (event) => {
		setAge(event.target.value);
	};
	const handleHeightsChange = (event) => {
		setheights(event.target.value);
	};

	let BMR = 0;
	let water = 0;
	let weights = user.currentWeight / 2.205; //lbs to kg
	let height = user.currentHeight * 2.54; // inch to cm
	let Userage = user.age;

	if (user.sex === "male") {
		BMR = 66.5 + 13.75 * weights + 5.003 * height - 6.75 * Userage;
	} else if (user.sex === "female") {
		BMR = 655.1 + 9.563 * weights + 1.85 * height - 4.676 * Userage;
	}

	if (user.targetChange === "Maintain") {
		BMR = weights * 15;
	} else if (user.targetChange === "Lose Weight") {
		BMR = weights * 12;
	} else if (user.targetChange === "Gain Weight") {
		BMR = weights * 18;
	}

	if (user.activityFactor === "Lightly Active") {
		BMR = BMR * 1.375;
	} else if (user.activityFactor === "Sedentary") {
		BMR = BMR * 1.2;
	} else if (user.activityFactor === "Moderately Active") {
		BMR = BMR * 1.55;
	} else if (user.activityFactor === "Very Active") {
		BMR = BMR * 1.725;
	} else if (user.activityFactor === "Extra Active") {
		BMR = BMR * 1.9;
	}

	//target water calc

	if (Userage < 8) {
		water = 1700;
	} else if (Userage > 8 && Userage < 18 && user.sex === "female") {
		water = 2300;
	} else if (Userage > 19 && user.sex === "female") {
		water = 2700;
	} else if (Userage > 8 && Userage < 18 && user.sex === "male") {
		water = 3300;
	} else if (Userage > 19 && user.sex === "male") {
		water = 3700;
	}

	const handleChange = (event) => {
		dispatch(
			editProfile({
				targetChange: weightGoal,
				activityFactor: activity,
				age: parseInt(age),
				currentWeight: parseInt(weight),
				targetCalories: Math.ceil(BMR),
				targetWater: water,
				currentHeight: heights,
				startingWeight: startingWeight,
			})
		);
		navigate("/profile");
	};

	return (
		<Stack spacing={1}>
			<Typography variant="h3" color="rgb(156 163 175)">
				Edit Profile:
			</Typography>

			<FormControl
				sx={{
					width: "100%",
					input: { color: "rgb(156 163 175)" },
					"& .MuiFormLabel-root": {
						color: "rgba(247, 171, 10, 50)",
					},
					"& .MuiOutlinedInput-root": {
						"& > fieldset": {
							borderColor: "rgba(247, 171, 10, 50)",
						},
					},
					"& .MuiOutlinedInput-root.Mui-focused": {
						"& > fieldset": {
							borderColor: "rgba(247, 171, 10, 50)",
						},
					},
				}}
				variant="outlined"
			>
				<OutlinedInput
					id="outlined-adornment-weight"
					value={startingWeight}
					onChange={handleStartingWeightChange}
					endAdornment={
						<InputAdornment position="end">
							<Typography sx={{ color: "rgba(247, 171, 10, 50)" }}>
								lbs
							</Typography>
						</InputAdornment>
					}
					aria-describedby="outlined-weight-helper-text"
					inputProps={{
						"aria-label": "weight",
					}}
				/>
				<FormHelperText sx={{ color: "rgba(247, 171, 10, 50)" }}>
					{" "}
					Starting Weight
				</FormHelperText>
			</FormControl>

			<FormControl
				sx={{
					width: "100%",
					input: { color: "rgb(156 163 175)" },
					"& .MuiFormLabel-root": {
						color: "rgba(247, 171, 10, 50)",
					},
					"& .MuiOutlinedInput-root": {
						"& > fieldset": {
							borderColor: "rgba(247, 171, 10, 50)",
						},
					},
					"& .MuiOutlinedInput-root.Mui-focused": {
						"& > fieldset": {
							borderColor: "rgba(247, 171, 10, 50)",
						},
					},
				}}
				variant="outlined"
			>
				<OutlinedInput
					id="outlined-adornment-weight"
					value={weight}
					onChange={handleWeightChange}
					endAdornment={
						<InputAdornment position="end">
							<Typography sx={{ color: "rgba(247, 171, 10, 50)" }}>
								lbs
							</Typography>
						</InputAdornment>
					}
					aria-describedby="outlined-weight-helper-text"
					inputProps={{
						"aria-label": "weight",
					}}
				/>
				<FormHelperText sx={{ color: "rgba(247, 171, 10, 50)" }}>
					{" "}
					Current Weight
				</FormHelperText>
			</FormControl>

			<FormControl
				sx={{
					width: "100%",
					input: { color: "rgb(156 163 175)" },
					"& .MuiFormLabel-root": {
						color: "rgba(247, 171, 10, 50)",
					},
					"& .MuiOutlinedInput-root": {
						"& > fieldset": {
							borderColor: "rgba(247, 171, 10, 50)",
						},
					},
					"& .MuiOutlinedInput-root.Mui-focused": {
						"& > fieldset": {
							borderColor: "rgba(247, 171, 10, 50)",
						},
					},
				}}
				variant="outlined"
			>
				<OutlinedInput
					id="outlined-adornment-weight"
					value={age}
					onChange={handleAgeChange}
					endAdornment={
						<InputAdornment position="end">
							<Typography sx={{ color: "rgba(247, 171, 10, 50)" }}>
								Years
							</Typography>
						</InputAdornment>
					}
					aria-describedby="outlined-weight-helper-text"
					inputProps={{
						"aria-label": "weight",
					}}
				/>
				<FormHelperText sx={{ color: "rgba(247, 171, 10, 50)" }}>
					Current Age
				</FormHelperText>
			</FormControl>

			<FormControl
				sx={{
					width: "100%",
					input: { color: "rgb(156 163 175)" },
					"& .MuiFormLabel-root": {
						color: "rgba(247, 171, 10, 50)",
					},
					"& .MuiOutlinedInput-root": {
						"& > fieldset": {
							borderColor: "rgba(247, 171, 10, 50)",
						},
					},
					"& .MuiOutlinedInput-root.Mui-focused": {
						"& > fieldset": {
							borderColor: "rgba(247, 171, 10, 50)",
						},
					},
				}}
				variant="outlined"
			>
				<OutlinedInput
					value={heights}
					onChange={handleHeightsChange}
					endAdornment={
						<InputAdornment position="end">
							<Typography sx={{ color: "rgba(247, 171, 10, 50)" }}>
								Inches
							</Typography>
						</InputAdornment>
					}
					aria-describedby="outlined-weight-helper-text"
					inputProps={{
						"aria-label": "weight",
					}}
				/>
				<FormHelperText sx={{ color: "rgba(247, 171, 10, 50)" }}>
					Current Height
				</FormHelperText>
			</FormControl>

			<Stack direction="row" spacing={0.5}>
				<FormControl
					sx={{
						width: "100%",
						input: { color: "rgb(156 163 175)" },
						"& .MuiSelectLabel-root": {
							color: "rgba(247, 171, 10, 50)",
						},
						"& .MuiOutlinedInput-root": {
							"& > fieldset": {
								borderColor: "rgba(247, 171, 10, 50)",
							},
						},
						"& .MuiOutlinedInput-root.Mui-focused": {
							"& > fieldset": {
								borderColor: "rgba(247, 171, 10, 50)",
							},
						},
					}}
				>
					<Select
						value={weightGoal}
						onChange={handleWeightGoalChange}
						displayEmpty
						inputProps={{ "aria-label": "Without label" }}
					>
						<MenuItem value={"Maintain Weight"}>Maintain Weight</MenuItem>
						<MenuItem value={"Lose Weight"}>Lose Weight</MenuItem>
						<MenuItem value={"Gain Weight"}>Gain Weight</MenuItem>
					</Select>
					<FormHelperText sx={{ color: "rgba(247, 171, 10, 50)" }}>
						Edit Weight Goal
					</FormHelperText>
				</FormControl>

				<FormControl
					sx={{
						width: "100%",
						input: { color: "rgb(156 163 175)" },
						"& .MuiFormLabel-root": {
							color: "rgba(247, 171, 10, 50)",
						},
						"& .MuiOutlinedInput-root": {
							"& > fieldset": {
								borderColor: "rgba(247, 171, 10, 50)",
							},
						},
						"& .MuiOutlinedInput-root.Mui-focused": {
							"& > fieldset": {
								borderColor: "rgba(247, 171, 10, 50)",
							},
						},
					}}
				>
					<Select
						value={activity}
						onChange={handleActivityChange}
						displayEmpty
						inputProps={{
							"aria-label": "Without label",
							color: "rgba(247, 171, 10, 50)",
						}}
					>
						<MenuItem value={"Sedentary"}>Sedentary</MenuItem>
						<MenuItem value={"Lightly Active"}>Lightly Active</MenuItem>
						<MenuItem value={"Moderately Active"}>Moderately Active</MenuItem>
						<MenuItem value={"Very Active"}>Very Active</MenuItem>
						<MenuItem value={"Extra Active"}>Extra Active</MenuItem>
					</Select>
					<FormHelperText sx={{ color: "rgba(247, 171, 10, 50)" }}>
						Edit Activity Factor
					</FormHelperText>
				</FormControl>
			</Stack>

			<Button
				sx={{
					border: "1px solid rgba(247, 171, 10, 50)",
					color: "rgba(247, 171, 10, 50)",
				}}
				variant="outlined"
				onClick={() => {
					handleChange();
				}}
			>
				Confirm Changes
			</Button>
		</Stack>
	);
};

export default EditProfile;
