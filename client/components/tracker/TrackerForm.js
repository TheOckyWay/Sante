import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addToSingleTracker } from "./trackerSlice";
import { addRecipe } from "../recipes/recipeSlice";
import {
	Typography,
	TextField,
	Container,
	FormControl,
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
		water: "0",
	});

	async function handleAddFoodWaterTracker(e) {
		e.preventDefault();
		await dispatch(addRecipe({ newFood }));
		await dispatch(addToSingleTracker({ id, newFood }));
		setNewFood({
			foodName: "",
			calories: "",
			protein: "",
			carbs: "",
			fat: "",
			courseType: "",
			water: "0",
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
					<Typography color="rgba(247, 171, 10, 50)" variant="h3">
						Add Food
					</Typography>
					<FormControl
						shrink
						sx={{
							input: { color: "rgb(156 163 175)" },
							"& .MuiFormLabel-root": {
								color: "rgba(247, 171, 10, 50)",
							},
							"& .MuiOutlinedInput-root": {
								"& > fieldset": {
									borderColor: "rgba(247, 171, 10, 50)",
									boxShadow: "6",
								},
							},
							"& .MuiOutlinedInput-root.Mui-focused": {
								"& > fieldset": {
									borderColor: "rgba(247, 171, 10, 50)",
									boxShadow: "6",
								},
							},
						}}
					>
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
						InputLabelProps={{ shrink: true }}
						label="Food Name"
						value={newFood.foodName}
						name="tracker-form-name"
						sx={{
							input: { color: "rgb(156 163 175)" },
							"& .MuiFormLabel-root": {
								color: "rgba(247, 171, 10, 50)",
							},
							"& .MuiOutlinedInput-root": {
								"& > fieldset": {
									borderColor: "rgba(247, 171, 10, 50)",
								},
							},
							"& .MuiOutlinedInput-root.Mui-focused": {
								"& > fieldset": {
									borderColor: "rgba(247, 171, 10, 50)",
								},
							},
						}}
						onChange={(e) => {
							setNewFood({
								...newFood,
								foodName: e.target.value,
							});
						}}
					/>
					<TextField
						InputLabelProps={{ shrink: true }}
						label="Calories"
						value={newFood.calories}
						name="tracker-form-calories"
						sx={{
							input: { color: "rgb(156 163 175)" },
							"& .MuiFormLabel-root": {
								color: "rgba(247, 171, 10, 50)",
							},
							"& .MuiOutlinedInput-root": {
								"& > fieldset": {
									borderColor: "rgba(247, 171, 10, 50)",
								},
							},
							"& .MuiOutlinedInput-root.Mui-focused": {
								"& > fieldset": {
									borderColor: "rgba(247, 171, 10, 50)",
								},
							},
						}}
						onChange={(e) => {
							setNewFood({
								...newFood,
								calories: e.target.value,
							});
						}}
					/>
					<TextField
						InputLabelProps={{ shrink: true }}
						label="Protein"
						value={newFood.protein}
						name="tracker-form-protein"
						sx={{
							input: { color: "rgb(156 163 175)" },
							"& .MuiFormLabel-root": {
								color: "rgba(247, 171, 10, 50)",
							},
							"& .MuiOutlinedInput-root": {
								"& > fieldset": {
									borderColor: "rgba(247, 171, 10, 50)",
								},
							},
							"& .MuiOutlinedInput-root.Mui-focused": {
								"& > fieldset": {
									borderColor: "rgba(247, 171, 10, 50)",
								},
							},
						}}
						onChange={(e) => {
							setNewFood({
								...newFood,
								protein: e.target.value,
							});
						}}
					/>
					<TextField
						InputLabelProps={{ shrink: true }}
						label="Carbs"
						value={newFood.carbs}
						name="tracker-form-carbs"
						sx={{
							input: { color: "rgb(156 163 175)" },
							"& .MuiFormLabel-root": {
								color: "rgba(247, 171, 10, 50)",
							},
							"& .MuiOutlinedInput-root": {
								"& > fieldset": {
									borderColor: "rgba(247, 171, 10, 50)",
								},
							},
							"& .MuiOutlinedInput-root.Mui-focused": {
								"& > fieldset": {
									borderColor: "rgba(247, 171, 10, 50)",
								},
							},
						}}
						onChange={(e) => {
							setNewFood({
								...newFood,
								carbs: e.target.value,
							});
						}}
					/>
					<TextField
						InputLabelProps={{ shrink: true }}
						label="Fat"
						value={newFood.fat}
						name="tracker-form-fat"
						sx={{
							input: { color: "rgb(156 163 175)" },
							"& .MuiFormLabel-root": {
								color: "rgba(247, 171, 10, 50)",
							},
							"& .MuiOutlinedInput-root": {
								"& > fieldset": {
									borderColor: "rgba(247, 171, 10, 50)",
								},
							},
							"& .MuiOutlinedInput-root.Mui-focused": {
								"& > fieldset": {
									borderColor: "rgba(247, 171, 10, 50)",
								},
							},
						}}
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
						<Typography color="rgba(247, 171, 10, 50)" variant="h3">
							Add Water
						</Typography>
						<TextField
							label="Water Consumed (milliliters)"
							name="tracker-form-water"
							InputLabelProps={{ shrink: true }}
							sx={{
								input: { color: "rgb(156 163 175)" },
								"& .MuiFormLabel-root": {
									color: "rgba(247, 171, 10, 50)",
								},
								"& .MuiOutlinedInput-root": {
									"& > fieldset": {
										borderColor: "rgba(247, 171, 10, 50)",
									},
								},
								"& .MuiOutlinedInput-root.Mui-focused": {
									"& > fieldset": {
										borderColor: "rgba(247, 171, 10, 50)",
									},
								},
							}}
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
