import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleTracker } from "../tracker/trackerSlice";

/**
 * COMPONENT
 */
const Home = (props) => {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.auth.me);

	useEffect(() => {
		dispatch(fetchSingleTracker(1));
	}, [dispatch]);

	const tracker = useSelector((state) => state.tracker.singleTracker);

	return (
		<div>
			{/* added this check since the tracker doesn't exist at this point for now... can remove later*/}
			{tracker ? (
				<div>
					<h3>Welcome, {user.username}</h3>
					<p>Total Calories: {tracker.totalCalories}</p>
					<p>Total Water: {tracker.waterIntake}</p>
					<p>Carbs: {tracker.totalCarbs}</p>
					<p>Protein: {tracker.totalProtein}</p>
					<p>Fat: {tracker.totalFat}</p>
				</div>
			) : null}
		</div>
	);
};

export default Home;
