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
          <Typography variant="h3" color="rgb(156 163 175)">
            Add Food
          </Typography>
          <FormControl
            sx={{
              width: "100%",
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
            variant="outlined"
          >
            <InputLabel shrink={true}>Course Type</InputLabel>
            <Select
              label="  Course Type"
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

            <TextField
              label="Food Name"
              InputLabelProps={{ shrink: true }}
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
              InputLabelProps={{ shrink: true }}
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
              InputLabelProps={{ shrink: true }}
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
              InputLabelProps={{ shrink: true }}
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
              InputLabelProps={{ shrink: true }}
              value={newFood.fat}
              name="tracker-form-fat"
              onChange={(e) => {
                setNewFood({
                  ...newFood,
                  fat: e.target.value,
                });
              }}
            />
          </FormControl>
          <Button type="submit">Add Food to Tracker</Button>
        </form>
      ) : (
        <div>
          <FormControl
            sx={{
              width: "100%",
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
            variant="outlined"
          >
            <form
              onSubmit={handleAddFoodWaterTracker}
              style={{
                display: "flex",
                textAlign: "center",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Typography variant="h3" color="rgb(156 163 175)">
                Add Water
              </Typography>
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
          </FormControl>
        </div>
      )}
    </Container>
  );
}

export default TrackerForm;
