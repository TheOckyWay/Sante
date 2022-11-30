import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleTracker, fetchTrackers } from "../tracker/trackerSlice";
import { Stack, Typography, Avatar, Box, Grid, Divider } from "@mui/material";
import { blue } from "@mui/material/colors";
import ProgressBar from "./ProgressBar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

/**
 * COMPONENT
 */

// Total Protein for the day is 0.36 grams of protein per pound of bodyweight
// Total Carbs for the day is 45% to 65% of total calories -> A carb is equal to 4 calories so divide the number by 4 to get total carbs
// Total Fat for the day is 30% or less of total calories -> A gram of fat is equal to 9 calories so divide the number by 9 to get total fat

const Home = (props) => {
	const Item = styled(Box)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	}));

	let protein, carbs, fat;

	const dispatch = useDispatch();

	const user = useSelector((state) => state.auth.me);
	const trackers = useSelector((state) => state.tracker.allTracker);
	let tracker = trackers[trackers.length - 1];

	const calculateMacros = () => {
		protein = user.startingWeight * 0.36;
		carbs = user.targetCalories * 0.6 * 4;
		fat = user.targetCalories * 0.25 * 9;
	};

	useEffect(() => {
		dispatch(fetchTrackers());
	}, []);

	// totalCalories / target * 100

	if (trackers.length && tracker) {
		const {
			totalCalories,
			waterIntake,
			totalCarbs,
			totalProtein,
			totalFat,
			date,
		} = tracker;

		return (
			<>
				<Grid
					container
					direction="column"
					justifyContent="space-evenly"
					alignItems="center"
					spacing={1}
				>
					<Grid item xs={12}>
						<Avatar sx={{ bgcolor: blue[900] }}>
							{user.firstName[0]}
							{user.lastName[0]}
						</Avatar>
					</Grid>

					<Grid item xs={12}>
						<Typography variant="h4" sx={{ color: "rgb(156 163 175)" }}>
							Welcome {user.username}!
						</Typography>
					</Grid>

					<Grid item xs={12}>
						<Typography variant="subtitle1" sx={{ color: "rgb(156 163 175)" }}>
							Calories for Today ({date}):
						</Typography>
					</Grid>
				</Grid>

				<Box
					sx={{
						mt: 5,
						height: "100%",
						width: "100%",
						backgroundColor: "white",
					}}
				>
					<Box
						sx={{
							m: 1,
							p: 1,
							width: "50%",
							display: "flex",
							justifyContent: "left",
							alignItems: "left",
						}}
					>
						<Typography align="left">
							Calories Remaining: {user.targetCalories - totalCalories}
						</Typography>
					</Box>
				</Box>
			</>
		);
	}
};

export default Home;
