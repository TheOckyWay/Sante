import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleTracker, fetchTrackers } from "../tracker/trackerSlice";
import { Stack, Typography, Avatar, Box, Grid, Divider } from "@mui/material";
import { blue } from "@mui/material/colors";

/**
 * COMPONENT
 */

// Total Protein for the day is 0.36 grams of protein per pound of bodyweight
// Total Carbs for the day is 45% to 65% of total calories -> A carb is equal to 4 calories so divide the number by 4 to get total carbs
// Total Fat for the day is 30% or less of total calories -> A gram of fat is equal to 9 calories so divide the number by 9 to get total fat

const Home = (props) => {
	const [progressCal, setProgressCal] = useState(0);
	const [progressPro, setProgressPro] = useState(0);
	const [progressCarb, setProgressCarb] = useState(0);
	const [progressFat, setProgressFat] = useState(0);
	const [progressWater, setProgressWater] = useState(0);

	const dispatch = useDispatch();

	const user = useSelector((state) => state.auth.me);
	const trackers = useSelector((state) => state.tracker.allTracker);
	let tracker = trackers[trackers.length - 1];

	useEffect(() => {
		dispatch(fetchTrackers());
	}, []);

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
			<div>
				<Box
					sx={{
						display: "flex",
					}}
					direction="row"
					justifyContent="space-evenly"
					alignItems="center"
					spacing={1}
				>
					<Avatar sx={{ bgcolor: blue[900] }}>
						{user.firstName[0]}
						{user.lastName[0]}
					</Avatar>
					<Typography variant="h4" sx={{ color: "rgb(156 163 175)" }}>
						Welcome {user.username}!
					</Typography>
				</Box>

				<Typography
					float="left"
					variant="h5"
					sx={{ color: "rgb(156 163 175)" }}
				>
					Calories for Today ({date}):
				</Typography>

				<Box
					sx={{
						border: "1px solid #313131",
						borderRadius: 5,
						width: "75%",
						boxShadow: "6",
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<Typography
								width="25%"
								alignItems="center"
								sx={{
									m: 1,
									p: 1,
									color: "rgb(156 163 175)",
								}}
							>
								Calories Remaining: {user.targetCalories - totalCalories}
							</Typography>
						</Grid>

						<Grid item xs={6}>
							<Typography
								width="25%"
								sx={{
									m: 1,
									p: 1,
									color: "rgb(156 163 175)",
								}}
							>
								Protein: {totalProtein}
							</Typography>

							<Typography
								width="25%"
								sx={{
									m: 1,
									p: 1,
									color: "rgb(156 163 175)",
								}}
							>
								Carbs: {totalCarbs}
							</Typography>

							<Typography
								width="25%"
								sx={{
									m: 1,
									p: 1,
									color: "rgb(156 163 175)",
								}}
							>
								Fats: {totalFat}
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box
					sx={{
						border: "1px solid #313131",
						width: "75%",
						boxShadow: "6",
					}}
				>
					<Typography
						width="25%"
						sx={{
							m: 1,
							p: 1,
							color: "rgb(156 163 175)",
						}}
					>
						Water: {waterIntake}
					</Typography>
				</Box>
			</div>
		);
	}
};

export default Home;
