import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleTracker } from "./trackerSlice";
import {
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	Button,
	Box,
	List,
	ListItemButton,
	ListItemText,
} from "@mui/material";

function SingleTracker() {
	const dispatch = useDispatch();
	const { id } = useParams();

	const tracker = useSelector((state) => state.tracker.singleTracker);
	console.log(tracker);

	const {
		totalCalories,
		totalCarbs,
		totalFat,
		totalProtein,
		date,
		waterIntake,
	} = tracker;

	useEffect(() => {
		dispatch(fetchSingleTracker(id));
	}, []);

	return (
		<Container>
			{tracker ? (
				<Grid container width="100%">
					<Grid item container>
						<Grid item container textAlign="center" direction="column">
							<Card
								variant="outlined"
								sx={{
									m: 2,
									p: 2,
									bgcolor: "#242424",
									border: "1px solid #f5f5f5",
								}}
							>
								<Typography
									marginBottom={5}
									align="center"
									variant="h5"
									color="rgba(247, 171, 10, 50)"
								>
									Date: {date}
								</Typography>
								<Typography variant="h5" color="rgba(247, 171, 10, 50)">
									Daily Calories: {totalCalories}
								</Typography>
								<Typography variant="h5" color="rgba(247, 171, 10, 50)">
									Protein: {totalProtein}
								</Typography>
								<Typography variant="h5" color="rgba(247, 171, 10, 50)">
									Carbs: {totalCarbs}
								</Typography>
								<Typography variant="h5" color="rgba(247, 171, 10, 50)">
									Fat: {totalFat}
								</Typography>
								<Typography variant="h5" color="rgba(247, 171, 10, 50)">
									Water: {waterIntake}
								</Typography>
							</Card>
						</Grid>
					</Grid>
					<Grid item container direction="column" textAlign="center">
						<Grid item marginTop={5}>
							{tracker.recipes ? (
								tracker.recipes.map((recipe) => {
									return (
										<div key={recipe.id}>
											<Typography
												align="left"
												color="rgb(156 163 175)"
												variant="subtitle2"
											>
												{recipe.name}
											</Typography>
											<Typography
												align="right"
												color="rgb(156 163 175)"
												variant="subtitle2"
											>
												{recipe.calories}
											</Typography>
											<hr />
										</div>
									);
								})
							) : (
								<div></div>
							)}
						</Grid>
						<Grid item marginTop={10}>
							<Link to={`/trackers/${tracker.id}/add-food`}>
								<Button variant="contained" sx={{ width: "50%" }}>
									Add Food
								</Button>
							</Link>
						</Grid>
						<Grid item>
							<Link to={`/trackers/${tracker.id}/add-water`}>
								<Button variant="contained" sx={{ width: "50%" }}>
									Add Water
								</Button>
							</Link>
						</Grid>
					</Grid>
				</Grid>
			) : null}
		</Container>
	);
}

export default SingleTracker;
