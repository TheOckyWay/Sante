import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleTracker, fetchTrackers } from "../tracker/trackerSlice";
import {
	Stack,
	Typography,
	Avatar,
	Box,
	Grid,
	Divider,
	CircularProgress,
	Paper,
	LinearProgress,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

/**
 * COMPONENT
 */

const Home = (props) => {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.auth.me);
	const trackers = useSelector((state) => state.tracker.allTracker);

	// Get trackers in order from date
	let sortArray = [...trackers];
	sortArray.sort((a, b) => {
		return a.id - b.id;
	});
	// This is current tracker
	let tracker = sortArray[sortArray.length - 1];

	// Variables for recommended macros
	let protein = 0;
	let carbs = 0;
	let fat = 0;
	const calculateMacros = () => {
		protein = user.startingWeight * 0.36;
		carbs = (user.targetCalories * 0.6) / 4;
		fat = (user.targetCalories * 0.25) / 9;
	};
	calculateMacros();

	useEffect(() => {
		dispatch(fetchTrackers());
	}, []);

	// Find recommended calories for each user
	let BMR = 0;
	let water = 0;
	function bmrAndWaterCalc() {
		let weight = user.currentWeight / 2.205; // lbs to kg
		let height = user.currentHeight * 2.54; // inch to cm
		let Userage = user.age;
		let sex = user.sex; // 'male' or 'female'

		if (user.sex === "male") {
			BMR = 66.5 + 13.75 * weight + 5.003 * height - 6.75 * Userage;
		} else if (user.sex === "female") {
			BMR = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * Userage;
		}

		if (user.targetChange === "Maintain") {
			BMR = weight * 15;
		} else if (user.targetChange === "Lose Weight") {
			BMR = weight * 12;
		} else if (user.targetChange === "Gain Weight") {
			BMR = weight * 18;
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

		//target water calculations

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

		return Math.ceil(BMR);
	}

	if (trackers.length && tracker) {
		const {
			totalCalories,
			waterIntake,
			totalCarbs,
			totalProtein,
			totalFat,
			date,
		} = tracker;

		// to be used later in the circular progress
		let percentagecalories = (totalCalories / bmrAndWaterCalc()) * 100;

		return (
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
			>
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
						width: "90%",
						backgroundColor: "404040",
						border: "1px solid rgb(156 163 175)",
						boxShadow: 6,
						borderRadius: 5,
					}}
				>
					<Grid container spacing={2} marginTop={1.5} marginBottom={4}>
						<Grid item xs={6}>
							<Typography
								marginLeft={5}
								fontSize={17.5}
								variant="subtitle1"
								align="left"
								color="rgba(247, 171, 10, 50)"
							>
								Cals. Remaining: {user.targetCalories - totalCalories} cals.
							</Typography>
							<Stack spacing={2} marginLeft={5} marginTop={2}>
								<CircularProgress
									size="8rem"
									variant="determinate"
									value={percentagecalories}
									sx={{ color: "#f7ab0a" }}
								/>
							</Stack>
						</Grid>

						<Grid item xs={6}>
							<Stack spacing={2} marginLeft={5}>
								<Typography color="rgba(247, 171, 10, 50)">Protein:</Typography>
								<LinearProgress
									size="10rem"
									variant="determinate"
									value={
										(totalProtein / protein) * 100 > 100
											? 100
											: (totalProtein / protein) * 100
									}
									sx={{
										borderRadius: 10,
										height: 10,
										width: "75%",
									}}
								/>
								<Typography color="rgba(247, 171, 10, 50)">Carbs:</Typography>
								<LinearProgress
									size="10rem"
									variant="determinate"
									value={
										(totalCarbs / carbs) * 100 > 100
											? 100
											: (totalCarbs / carbs) * 100
									}
									sx={{
										borderRadius: 10,
										height: 10,
										width: "75%",
									}}
								/>
								<Typography color="rgba(247, 171, 10, 50)">Fat:</Typography>
								<LinearProgress
									size="10rem"
									variant="determinate"
									value={
										(totalFat / fat) * 100 > 100 ? 100 : (totalFat / fat) * 100
									}
									sx={{
										borderRadius: 10,
										height: 10,
										width: "75%",
									}}
								/>
							</Stack>
						</Grid>
					</Grid>
				</Box>

				<Box
					sx={{
						mt: 5,
						height: "100%",
						width: "90%",
						backgroundColor: "404040",
						border: "1px solid rgb(156 163 175)",
						boxShadow: 6,
						borderRadius: 5,
					}}
				>
					<Grid container spacing={2} marginTop={1} marginBottom={3}>
						<Grid item xs={12}>
							<Stack spacing={2} marginBottom={3} alignItems="center">
								<Typography
									align="center"
									fontSize={20}
									variant="subtitle1"
									marginBottom={3}
									color="rgba(247, 171, 10, 50)"
								>
									Water Left:
								</Typography>
								<LinearProgress
									size="10rem"
									variant="determinate"
									value={
										(waterIntake / user.targetWater) * 100 > 100
											? 100
											: (waterIntake / user.targetWater) * 100
									}
									sx={{
										borderRadius: 10,
										height: 10,
										width: "90%",
									}}
								/>
							</Stack>
						</Grid>
					</Grid>
				</Box>
			</Grid>
		);
	}
};

export default Home;
