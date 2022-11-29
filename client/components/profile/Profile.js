import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import { fetchUser } from "./profileSlice";
import { editProfile, me } from "../auth/authSlice";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { logout } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Profile() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.auth.me);

	const theme = createTheme({
		palette: {
			neutral: {
				main: "#64748B",
				contrastText: "#fff",
				border: 1,
			},
		},
	});

	let BMR = 0;
	let water = 0;
	function bmrAndWaterCalc() {
		let weight = user.currentWeight / 2.205; //lbs to kg
		let height = user.currentHeight * 2.54; // inch to cm
		let Userage = user.age;
		let sex = user.sex; // 'male' or 'female'

		if (user.sex === "male") {
			BMR = 66.5 + 13.75 * weight + 5.003 * height - 6.75 * Userage;
		} else if (user.sex === "female") {
			BMR = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * Userage;
		}

		if (user.targetChange === "Maintain") {
			BMR = weight * 15;
		} else if (user.targetChange === "Lose Weight") {
			BMR = weight * 12;
		} else if (user.targetChange === "Gain Weight") {
			BMR = weight * 18;
		}

		if (user.activityFactor === "Lightly Active") {
			BMR = BMR * 1.375;
		} else if (user.activityFactor === "Sedentary") {
			BMR = BMR * 1.2;
		} else if (user.activityFactor === "Moderately Active") {
			BMR = BMR * 1.55;
		} else if (user.activityFactor === "Very Active") {
			BMR = BMR * 1.725;
		} else if (user.activityFactor === "Extra Active") {
			BMR = BMR * 1.9;
		}

		//target water calc

		if (Userage < 8) {
			water = 1700;
		} else if (Userage > 8 && Userage < 18 && user.sex === "female") {
			water = 2300;
		} else if (Userage > 19 && user.sex === "female") {
			water = 2700;
		} else if (Userage > 8 && Userage < 18 && user.sex === "male") {
			water = 3300;
		} else if (Userage > 19 && user.sex === "male") {
			water = 3700;
		}

		return Math.ceil(BMR);
	}
	useEffect(() => {
		dispatch(fetchUser(user.id));
	}, [dispatch]);

	const logoutAndRedirectHome = () => {
		dispatch(logout());
		navigate("/login");
	};

	const editprofile = () => {
		navigate("/editprofile");
	};

	//BMR calculations

	const Mid = styled("mid")(({ theme }) => ({
		...theme.typography.button,
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(1),
		// background: 'linear-gradient(to right, rgba(161,196,253,0.45), rgba(194,233,251,0.45))',
		// boxShadow: '0 3px 5px 2px rgba(5,0,253,0.48)',
		width: "50%",
		height: "50",
		textAlign: "center",
	}));

	//component
	return (
		<div>
			<ThemeProvider theme={theme}>
				<Stack
					direction="column"
					justifyContent="space-evenly"
					alignItems="center"
					spacing={2.5}
				>
					<Stack>
						<Stack
							justifyContent="space-evenly"
							direction="row"
							spacing={1}
							divider={<Divider orientation="vertical" flexItem />}
						>
							<Avatar sx={{ bgcolor: blue[900] }}>
								{user.firstName[0]}
								{user.lastName[0]}
							</Avatar>
						</Stack>
						<Stack alignItems="center">
							<Typography>
								{user.firstName} {user.lastName}
							</Typography>
							<Typography>{user.email}</Typography>
						</Stack>
					</Stack>

					<Stack direction="column" spacing={5}>
						<Stack
							direction="row"
							divider={<Divider orientation="vertical" flexItem />}
							spacing={0.5}
						>
							<TextField
								label="Username"
								defaultValue={user.username}
								inputProps={{ min: 0, style: { textAlign: "center" } }}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
								color="neutral"
							/>

							<TextField
								label="Age"
								defaultValue={user.age}
								inputProps={{ min: 0, style: { textAlign: "center" } }}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>
						</Stack>

						<Stack
							direction="row"
							divider={<Divider orientation="vertical" flexItem />}
							spacing={0.5}
						>
							<TextField
								label="Current Height"
								defaultValue={user.currentHeight + "inches"}
								inputProps={{ min: 0, style: { textAlign: "center" } }}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>

							<TextField
								label="Starting Weight"
								defaultValue={user.startingWeight + "lbs"}
								inputProps={{ min: 0, style: { textAlign: "center" } }}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>
						</Stack>

						<Stack
							direction="row"
							spacing={0.5}
							divider={<Divider orientation="vertical" flexItem />}
						>
							<TextField
								label="Weight Goal"
								defaultValue={user.targetChange}
								inputProps={{ min: 0, style: { textAlign: "center" } }}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>

							<TextField
								label="Activity Level"
								defaultValue={user.activityFactor}
								inputProps={{ min: 0, style: { textAlign: "center" } }}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>
						</Stack>

						<Stack
							direction="row"
							spacing={0.5}
							divider={<Divider orientation="vertical" flexItem />}
						>
							<TextField
								label="Current Weight"
								defaultValue={user.currentWeight + "lbs"}
								inputProps={{ min: 0, style: { textAlign: "center" } }}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>

							<TextField
								label="Target Weight"
								defaultValue={user.targetWeight + "lbs"}
								inputProps={{ min: 0, style: { textAlign: "center" } }}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>
						</Stack>

						<Stack
							direction="row"
							spacing={0.5}
							divider={<Divider orientation="vertical" flexItem />}
						>
							<TextField
								label="Target Calories"
								defaultValue={
									user.targetCalories
										? user.targetCalories + "cal"
										: bmrAndWaterCalc() + "cal"
								}
								inputProps={{ min: 0, style: { textAlign: "center" } }}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>

							<TextField
								label="Target Water"
								defaultValue={user.targetWater + "ml"}
								inputProps={{ min: 0, style: { textAlign: "center" } }}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>
						</Stack>
					</Stack>

					<Stack direction="row">
						<Button
							variant="contained"
							color="error"
							onClick={logoutAndRedirectHome}
						>
							Logout
						</Button>

						<Button variant="contained" color="success" onClick={editprofile}>
							Edit Profile
						</Button>
					</Stack>
				</Stack>
			</ThemeProvider>
		</div>
	);
}

export default Profile;
