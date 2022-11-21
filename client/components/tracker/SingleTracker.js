import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleTracker } from "./trackerSlice";

function SingleRecipe() {
	const dispatch = useDispatch();
	const { id } = useParams();

	const tracker = useSelector((state) => state.tracker.singleTracker);
	// const {
	//   id: trackerId,
	//   totalCalories,
	//   waterIntake,
	//   totalProtein,
	//   totalCarbs,
	//   totalFat,
	//   date,
	// } = tracker;

	useEffect(() => {
		dispatch(fetchSingleTracker(id));
	}, []);

	return (
		<div>
			{/* this check is just because of new stuff will change back to normal later */}
			{tracker ? (
				<div>
					<div>
						<h1>{tracker.id}</h1>
						<h3>Calories: {tracker.totalCalories}</h3>
						<h3>water: {tracker.waterIntake}</h3>
						<h3>Protein: {tracker.totalProtein}</h3>
						<h3>Carbohydrates: {tracker.totalCarbs}</h3>
						<h3>Fat: {tracker.totalFat}</h3>
						<h3>Date: {tracker.date}</h3>
					</div>
					<Link to={`/trackers/${tracker.id}/add-food`}>
						<h3>Add Food</h3>
					</Link>
					<Link to={`/trackers/${tracker.id}/add-water`}>
						<h3>Add Water</h3>
					</Link>
				</div>
			) : null}
		</div>
	);
}

export default SingleRecipe;
