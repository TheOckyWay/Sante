import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { addToSingleTracker } from "./trackerSlice";
import {
	Typography,
	TextField,
	Container,
	FormControl,
	FormLabel,
	Button,
	Select,
	InputLabel,
	MenuItem,
} from "@mui/material";

function TrackerForm(props) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	const [newFood, setNewFood] = useState({
		foodName: "",
		calories: "",
		protein: "",
		carbs: "",
		fat: "",
		courseType: "",
		water: "",
	});

	function handleAddFoodWaterTracker(e) {
		e.preventDefault();
		dispatch(addToSingleTracker({ id, newFood }));
		setNewFood({
			foodName: "",
			calories: "",
			protein: "",
			carbs: "",
			fat: "",
			courseType: "",
			water: "",
		});
		navigate(`/trackers/${id}`);
	}

	return (
		<Container>
			{props.action === "addFood" ? (
				<form
					onSubmit={handleAddFoodWaterTracker}
					style={{
						display: "flex",
						textAlign: "center",
						flexDirection: "column",
						width: "100%",
					}}
				>
					<Typography variant="h3">Add Food</Typography>
					<FormControl>
						<InputLabel>Course Type</InputLabel>
						<Select
							label="Course Type"
							value={newFood.courseType}
							onChange={(e) => {
								setNewFood({
									...newFood,
									courseType: e.target.value,
								});
							}}
						>
							<MenuItem value={"Breakfast"}>Breakfast</MenuItem>
							<MenuItem value={"Lunch"}>Lunch</MenuItem>
							<MenuItem value={"Dinner"}>Dinner</MenuItem>
							<MenuItem value={"Snack"}>Snack</MenuItem>
						</Select>
					</FormControl>
					<TextField
						label="Food Name"
						value={newFood.foodName}
						name="tracker-form-name"
						onChange={(e) => {
							setNewFood({
								...newFood,
								foodName: e.target.value,
							});
						}}
					/>
					<TextField
						label="Calories"
						value={newFood.calories}
						name="tracker-form-calories"
						onChange={(e) => {
							setNewFood({
								...newFood,
								calories: e.target.value,
							});
						}}
					/>
					<TextField
						label="Protein"
						value={newFood.protein}
						name="tracker-form-protein"
						onChange={(e) => {
							setNewFood({
								...newFood,
								protein: e.target.value,
							});
						}}
					/>
					<TextField
						label="Carbs"
						value={newFood.carbs}
						name="tracker-form-carbs"
						onChange={(e) => {
							setNewFood({
								...newFood,
								carbs: e.target.value,
							});
						}}
					/>
					<TextField
						label="Fat"
						value={newFood.fat}
						name="tracker-form-fat"
						onChange={(e) => {
							setNewFood({
								...newFood,
								fat: e.target.value,
							});
						}}
					/>
					<Button type="submit">Add Food to Tracker</Button>
				</form>
			) : (
				<div>
					<form
						onSubmit={handleAddFoodWaterTracker}
						style={{
							display: "flex",
							textAlign: "center",
							flexDirection: "column",
							width: "100%",
						}}
					>
						<Typography variant="h3">Add Water</Typography>
						<TextField
							label="Water Consumed (milliliters)"
							name="tracker-form-water"
							InputLabelProps={{ shrink: true }}
							onChange={(e) => {
								setNewFood({
									...newFood,
									water: e.target.value,
								});
							}}
						/>
						<Button type="submit">Add Water to Tracker</Button>
					</form>
				</div>
			)}
		</Container>
	);
}

export default TrackerForm;
