import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Stack,
	Typography,
	Box,
	Fab,
	EditIcon,
	Button,
	TextField,
	InputField,
	MenuItem,
	FormControl,
	Select,
	FormHelperText,
	Avatar,
	Divider,
} from "@mui/material";
import { fetchUser } from "./profileSlice";
import { editProfile, me } from "../auth/authSlice";

import { blue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

import { logout } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Profile() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.auth.me);

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
						<Avatar sx={{ bgcolor: "rgb(156 163 175)" }}>
							{user.firstName[0]}
							{user.lastName[0]}
						</Avatar>
					</Stack>
					<Stack alignItems="center">
						<Typography color="rgb(156 163 175)">
							{user.firstName} {user.lastName}
						</Typography>
						<Typography color="rgb(156 163 175)">{user.email}</Typography>
					</Stack>
				</Stack>

				<Stack direction="column" spacing={5}>
					<Stack
						direction="row"
						divider={<Divider orientation="vertical" flexItem />}
						spacing={0.5}
					>
						<TextField
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
							label="Username"
							defaultValue={user.username}
							inputProps={{ min: 0, style: { textAlign: "center" } }}
							InputProps={{
								readOnly: true,
							}}
							variant="outlined"
						/>

						<TextField
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
						style={{}}
						direction="row"
						divider={<Divider orientation="vertical" flexItem />}
						spacing={0.5}
					>
						<TextField
							color="primary"
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
							label="Current Height"
							defaultValue={user.currentHeight + "inches"}
							inputProps={{ min: 0, style: { textAlign: "center" } }}
							InputProps={{
								readOnly: true,
							}}
							variant="outlined"
						/>

						<TextField
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
							label="Weight Goal"
							defaultValue={user.targetChange}
							inputProps={{ min: 0, style: { textAlign: "center" } }}
							InputProps={{
								readOnly: true,
							}}
							variant="outlined"
						/>

						<TextField
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
							label="Current Weight"
							defaultValue={user.currentWeight + "lbs"}
							inputProps={{ min: 0, style: { textAlign: "center" } }}
							InputProps={{
								readOnly: true,
							}}
							variant="outlined"
						/>

						<TextField
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
						divider={<Divider orientation="vertical" flexItem sx={{ pb: 5 }} />}
					>
						<TextField
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

				<Stack
					direction="row"
					divider={<Divider orientation="vertical" flexItem />}
					spacing={0.5}
				>
					<Button
						variant="outlined"
						color="error"
						onClick={logoutAndRedirectHome}
						sx={{
							width: "100%",
							color: "#F7AB0A",
							border: "1px solid rgb(156 163 175)",
							boxShadow: "6",
						}}
					>
						Logout
					</Button>

					<Button
						variant="outlined"
						onClick={editprofile}
						sx={{
							width: "100%",
							color: "#F7AB0A",
							border: "1px solid rgb(156 163 175)",
							boxShadow: "6",
						}}
					>
						Edit Profile
					</Button>
				</Stack>
			</Stack>
		</div>
	);
}

export default Profile;
