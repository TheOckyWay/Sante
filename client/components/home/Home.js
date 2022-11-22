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
	const dispatch = useDispatch();

	const user = useSelector((state) => state.auth.me);
	const tracker = useSelector((state) => state.tracker.singleTracker);

	useEffect(() => {
		dispatch(fetchSingleTracker(tracker.id));
	}, [dispatch]);

	return (
		<div>
			<div>
				<h3>Welcome, {user.username}</h3>
				<p>Total Calories: {tracker.totalCalories}</p>
				<p>Total Water: {tracker.waterIntake}</p>
				<p>Carbs: {tracker.totalCarbs}</p>
				<p>Protein: {tracker.totalProtein}</p>
				<p>Fat: {tracker.totalFat}</p>
			</div>
		</div>
	);
};

export default Home;
