import {
	Container,
	Typography,
	Grid,
	Card,
	Button,
	Box,
	CircularProgress,
	Dialog,
	DialogTitle,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSingleRecipe } from "./recipeSlice";
import {
	fetchSingleTracker,
	addToSingleTracker,
	fetchTrackers,
} from "../tracker/trackerSlice";

function SingleRecipe() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const { id } = useParams();

	const recipe = useSelector((state) => state.recipes.singleRecipes);
	const {
		imageUrl,
		name,
		cookTime,
		calories,
		protein,
		carbs,
		fat,
		courseType,
		cuisine,
	} = recipe;

	const tracker = useSelector((state) => state.tracker.singleTracker);
	const trackers = useSelector((state) => state.tracker.allTracker);

	const padTo2Digits = (num) => {
		return num.toString().padStart(2, 0);
	};

	function formatDate(date) {
		return [
			date.getFullYear(),
			padTo2Digits(date.getMonth() + 1),
			padTo2Digits(date.getDate()),
		].join("-");
	}

	const todayTracker = trackers.filter(
		(tracker) => tracker.date === formatDate(new Date())
	);

	const todayTrackerId = todayTracker[0];

	const addToTrackerButton = async (id) => {
		const newFood = {
			id: recipe.id,
			foodName: recipe.name,
			calories: recipe.calories,
			protein: recipe.protein,
			carbs: recipe.carbs,
			fat: recipe.fat,
			courseType: recipe.courseType,
		};
		await dispatch(addToSingleTracker({ id, newFood }));
	};

	useEffect(() => {
		dispatch(fetchTrackers());
		dispatch(fetchSingleRecipe(id));
		if (todayTrackerId) {
			dispatch(fetchSingleTracker(todayTrackerId.id));
		}
	}, []);

	return (
		<Container>
			{todayTrackerId ? (
				<Stack>
					<Stack>
						<Grid container direction="column" marginBottom="20px">
							<Grid item display="flex" flexDirection="column">
								<Typography
									variant="h5"
									textAlign="center"
									color="rgb(156 163 175)"
								>
									{name}
								</Typography>

								<Dialog open={open} onClose={handleClose}>
									<DialogTitle>
										{name} was successfully added to today's tracker!
									</DialogTitle>
									<Box display="flex" justifyContent="space-around">
										<Button onClick={handleClose}>X</Button>
										<Button
											onClick={() => {
												navigate(`/trackers/`);
											}}
										>
											Go to your Trackers
										</Button>
									</Box>
								</Dialog>
							</Grid>
							<Grid
								item
								container
								sx={{ width: "50vw", height: "50vh", alignSelf: "center" }}
								xs={6}
								sm={6}
								md={6}
								lg={6}
								xl={6}
							>
								<Box
									component="img"
									src={imageUrl}
									sx={{
										borderRadius: "15%",
										width: "100%",
										height: "100%",
										textAlign: "center",
									}}
								/>
							</Grid>
							<Grid item>
								<Box
									display="grid"
									gridTemplateColumns="repeat(2, 1fr)"
									gap={2}
								>
									<Box gridColumn="span 2" justifyContent="space-around">
										<Card
											sx={{
												display: "flex",
												justifyContent: "space-around",
												marginTop: "20px",
												bgcolor: "#242424",
												border: "solid #313131",
												boxShadow: "6",
											}}
										>
											<Typography variant="h6" color="rgb(156 163 175)">
												Cooking Time: {cookTime} Minutes
											</Typography>
											<Typography variant="h6" color="rgb(156 163 175)">
												Calories: {calories}
											</Typography>
										</Card>
									</Box>
									<Box
										gridColumn="span 2"
										textAlign="center"
										flexDirection="column"
									>
										<Card
											variant="outlined"
											sx={{
												bgcolor: "#242424",
												border: "solid #313131",
												boxShadow: "6",
											}}
										>
											<Typography variant="h6" color="rgb(156 163 175)">
												Protein: {protein}
											</Typography>
											<Typography variant="h6" color="rgb(156 163 175)">
												Carbohydrates: {carbs}
											</Typography>
											<Typography variant="h6" color="rgb(156 163 175)">
												Fats: {fat}
											</Typography>
											<Typography variant="h6" color="rgb(156 163 175)">
												Course Type: {courseType}
											</Typography>
											<Typography variant="h6" color="rgb(156 163 175)">
												Cuisine: {cuisine}
											</Typography>
										</Card>
										<Stack sx={{ width: "100%", pb: 5 }}>
											<Button
												onClick={() => {
													addToTrackerButton(tracker.id);
													handleClickOpen();
												}}
												variant="contained"
												sx={{ width: "45" }}
											>
												Add to Tracker
											</Button>
										</Stack>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Stack>
				</Stack>
			) : (
				<CircularProgress />
			)}
		</Container>
	);
}

export default SingleRecipe;
