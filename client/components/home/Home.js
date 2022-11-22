import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleTracker } from "../tracker/trackerSlice";
import { Grid, Box, Typography } from "@mui/material";

/**
 * COMPONENT
 */
const Home = (props) => {
	// hardcoded target calories: 2,500

	const dispatch = useDispatch();

	const user = useSelector((state) => state.auth.me);
	const tracker = useSelector((state) => state.tracker.singleTracker);

	useEffect(() => {
		dispatch(fetchSingleTracker(tracker.id));
	}, [dispatch]);

	return (
		<div>
			{/* {tracker !== undefined ? (
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
			)} */}
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Box
						flex
						sx={{
              width: 300,
							height: 300,
							bgcolor: "primary.main",
							borderRadius: 15,
						}}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
