import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleTracker } from "../tracker/trackerSlice";
import {
	styled,
	Box,
	CircularProgress,
	circularProgressClasses,
	LinearProgress,
	linearProgressClasses,
} from "@mui/material";

/**
 * COMPONENT
 */
const Home = (props) => {
	const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
		height: 10,
		borderRadius: 5,
		[`&.${linearProgressClasses.colorPrimary}`]: {
			backgroundColor:
				theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
		},
		[`& .${linearProgressClasses.bar}`]: {
			borderRadius: 5,
			backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
		},
	}));

	const dispatch = useDispatch();

	const user = useSelector((state) => state.auth.me);
	const tracker = useSelector((state) => state.tracker.singleTracker);

	useEffect(() => {
		dispatch(fetchSingleTracker(tracker.id));
	}, [dispatch]);

	return (
		<div>
			{tracker !== undefined ? (
				<div>
					<h3>Welcome, {user.username}</h3>
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
			)}
			<Box sx={{ flexGrow: 1 }}>
				<BorderLinearProgress variant="determinate" value={50} />
			</Box>
		</div>
	);
};

export default Home;
