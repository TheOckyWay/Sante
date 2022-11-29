import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleTracker, fetchTrackers } from "../tracker/trackerSlice";
import { Stack, Typography, Avatar, Box, LinearProgress } from "@mui/material";
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
				<Stack
					direction="column"
					justifyContent="space-evenly"
					alignItems="center"
					spacing={3}
				>
					<Stack
						direction="row"
						justifyContent="space-evenly"
						alignItems="center"
						spacing={1}
					>
						<Avatar sx={{ bgcolor: blue[900] }}>
							{user.firstName[0]}
							{user.lastName[0]}
						</Avatar>
						<Typography variant="h4">Welcome {user.username}!</Typography>
					</Stack>

					<Typography float="left" variant="h5">
						Calories for Today ({date}):
					</Typography>

					<Stack
						direction="row"
						border="1px solid grey"
						borderRadius={5}
						width="75%"
						spacing={2}
					>
						<div
							direction="column"
							justifycontent="flex-end"
							alignitems="flex-end"
						>
							<Typography
								width="25%"
								sx={{
									m: 1,
									p: 1,
								}}
							>
								Calories: {totalCalories}
							</Typography>

							{/* <Box sx={{ width: "50%" }}>
								<LinearProgress variant="determinate" value={25} />
							</Box> */}

							<Typography
								width="25%"
								sx={{
									m: 1,
									p: 1,
								}}
							>
								Protein: {totalProtein}
							</Typography>
							{/* <Box sx={{ width: 500, paddingLeft: 10 }}>
								<LinearProgress variant="determinate" value={5} />
							</Box> */}

							<Typography
								width="25%"
								sx={{
									m: 1,
									p: 1,
								}}
							>
								Carbs: {totalCarbs}
							</Typography>
							{/* <Box sx={{ width: 500, paddingLeft: 10 }}>
								<LinearProgress variant="determinate" value={50} />
							</Box> */}

							<Typography
								width="25%"
								sx={{
									m: 1,
									p: 1,
								}}
							>
								Fats: {totalFat}
							</Typography>
							{/* <Box sx={{ width: 500, paddingLeft: 10 }}>
								<LinearProgress variant="determinate" value={47} />
							</Box> */}
						</div>
					</Stack>
					<Stack direction="row" border="1px solid grey" width="75%">
						<div
							direction="column"
							justifycontent="flex-end"
							alignitems="flex-end"
						>
							<Typography
								width="25%"
								sx={{
									m: 1,
									p: 1,
								}}
							>
								Water: {waterIntake}
							</Typography>
							{/* <Box sx={{ width: 500, paddingLeft: 10 }}>
								<LinearProgress variant="determinate" value={85} />
							</Box> */}
						</div>
					</Stack>
				</Stack>
			</div>
		);
	}
};

export default Home;
