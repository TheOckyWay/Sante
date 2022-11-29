import {
	Box,
	Grid,
	TextField,
	Typography,
	FormControl,
	FormLabel,
	FormControlLabel,
	InputLabel,
	OutlinedInput,
	IconButton,
	InputAdornment,
	Button,
	Stepper,
	Step,
	StepLabel,
	Link,
	Radio,
	RadioGroup,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateSignup } from "../authSlice";
import { useNavigate } from "react-router-dom";

function SignUp({ name }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const steps = [
		"Basic Info",
		"Weight",
		"Weight Goal",
		"Exercise",
		"Target Macros",
	];

	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
		age: 0,
		sex: "",
		startingWeight: 0,
		targetWeight: 0,
		targetChange: "",
		activityStatus: "",
		targetWater: 0,
		showPassword: false,
	});

	const [activeStep, setActiveStep] = useState(0);

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		if (values.startingWeight - values.targetWeight < 0) {
			values.targetChange = "Lose Weight";
		} else if (values.startingWeight - values.targetWeight > 0) {
			values.targetChange = "Gain Muscle";
		} else {
			values.targetChange = "Maintain";
		}
		dispatch(authenticateSignup({ values, method: name }));
	};

	return (
		<div id="signup">
			{/* Stepper */}
			<div id="stepper">
				<Box
					sx={{
						width: "100%",
						mb: 3,
						display: "flex",
						flexDirection: "column",
						gap: 3,
						overflow: "auto hidden",
						"&::-webkit-scrollbar": { height: 10, WebkitAppearance: "none" },
						"&::-webkit-scrollbar-thumb": {
							borderRadius: 8,
							border: "2px solid",
							borderColor: "#E7EBF0",
							backgroundColor: "rgba(0 0 0 / 0.5)",
						},
					}}
				>
					<Stepper activeStep={activeStep}>
						{steps.map((label, index) => {
							const stepProps = {};
							const labelProps = {};

							return (
								<Step key={label} {...stepProps}>
									<StepLabel {...labelProps} />
								</Step>
							);
						})}
					</Stepper>
				</Box>
			</div>

			{/* Basic Info */}
			<div margin="auto">
				<Box
					sx={{
						width: "auto",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Typography variant="h3">Welcome!</Typography>
				</Box>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<TextField
							margin="normal"
							fullWidth
							id="firstName"
							label="First Name"
							name="firstName"
							onChange={handleChange("firstName")}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							margin="normal"
							fullWidth
							id="lastName"
							label="Last Name"
							name="lastName"
							onChange={handleChange("lastName")}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							margin="normal"
							fullWidth
							id="username"
							label="Username"
							name="username"
							onChange={handleChange("username")}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							margin="normal"
							fullWidth
							id="email"
							label="Email"
							name="email"
							onChange={handleChange("email")}
						/>
					</Grid>

					<Grid item xs={12}>
						<FormControl variant="outlined" fullWidth={true}>
							<InputLabel htmlFor="outlined-adornment-password">
								Password
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showPassword ? "text" : "password"}
								value={values.password}
								onChange={handleChange("password")}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>
						</FormControl>
					</Grid>

					<Grid item xs={4}>
						<TextField
							margin="normal"
							id="age"
							label="Age"
							name="age"
							onChange={handleChange("age")}
						/>
					</Grid>
					<Grid item xs />

					<Grid item xs={12}>
						<FormControl justifyContent="center">
							<FormLabel id="gender-radio-buttons-group">Sex</FormLabel>
							<RadioGroup
								aria-labelledby="gender-radio-buttons-group"
								row
								name="gender-radio-buttons-group"
								value={values.sex}
								onChange={handleChange("sex")}
							>
								<FormControlLabel
									value="female"
									control={<Radio />}
									label="Female"
								/>
								<FormControlLabel
									value="male"
									control={<Radio />}
									label="Male"
								/>
							</RadioGroup>
						</FormControl>
					</Grid>

					<Grid item xs />
				</Grid>
			</div>

			{/* WeightInfo */}
			<div>
				<Grid marginTop={3} container spacing={2}>
					<Grid item xs={6}>
						<Typography variant="subtitle2">
							What is your current weight?
						</Typography>
					</Grid>
					<Grid item xs={6} />

					<Grid item xs={4}>
						<Box display="flex">
							<FormControl sx={{ m: 1, width: "15ch" }} variant="outlined">
								<OutlinedInput
									id="outlined-adornment-weight"
									value={values.startingWeight}
									onChange={handleChange("startingWeight")}
									endAdornment={
										<InputAdornment position="end">lbs</InputAdornment>
									}
									aria-describedby="outlined-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
								/>
							</FormControl>
						</Box>
					</Grid>
					<Grid item xs={8} />

					<Grid item xs={6}>
						<Typography variant="subtitle2">
							What is your target weight?
						</Typography>
					</Grid>
					<Grid item xs={6} />

					<Grid item xs={4}>
						<Box display="flex">
							<FormControl sx={{ m: 1, width: "15ch" }} variant="outlined">
								<OutlinedInput
									id="outlined-adornment-weight"
									value={values.targetWeight}
									onChange={handleChange("targetWeight")}
									endAdornment={
										<InputAdornment position="end">lbs</InputAdornment>
									}
									aria-describedby="outlined-weight-helper-text"
									inputProps={{
										"aria-label": "weight",
									}}
								/>
							</FormControl>
						</Box>
					</Grid>
					<Grid item xs={8} />
				</Grid>

				<div>
					<Grid marginTop={3} container spacing={2}>
						<Grid item xs={8}>
							<Typography variant="subtitle2">
								How much do you exercise daily?
							</Typography>
						</Grid>
						<Grid item xs={4} />

						<Grid item xs={12}>
							<FormControl>
								<RadioGroup
									aria-labelledby="activity-radio-buttons-group"
									name="activity-radio-buttons-group"
									value={values.activityStatus}
									onChange={handleChange("activityStatus")}
								>
									<FormControlLabel
										value="Sedentary"
										control={<Radio />}
										label="Sedentary (little or no exercise)"
									/>
									<FormControlLabel
										value="Lightly Active"
										control={<Radio />}
										label="Lighly Active (1-2 times per week)"
									/>
									<FormControlLabel
										value="Moderately Active"
										control={<Radio />}
										label="Moderately Active (3-5 times per week)"
									/>
									<FormControlLabel
										value="Very Active"
										control={<Radio />}
										label="Very Active (6-7 times per week)"
									/>
									<FormControlLabel
										value="Extra Active"
										control={<Radio />}
										label="Extra Active (Athelete)"
									/>
								</RadioGroup>
							</FormControl>
						</Grid>

						<Grid marginTop={3} item xs={12}>
							<FormControl sx={{ width: "15ch" }} variant="outlined">
								<Typography variant="subtitle2">Target Water:</Typography>
								<OutlinedInput
									id="outlined-adornment-weight"
									value={values.targetWater}
									onChange={handleChange("targetWater")}
									endAdornment={
										<InputAdornment position="end">ml</InputAdornment>
									}
									inputProps={{
										"aria-label": "weight",
									}}
								/>
							</FormControl>
						</Grid>

						<Grid item xs={6}>
							<Box
								component="form"
								onSubmit={handleSubmit}
								noValidate
								sx={{ mt: 1 }}
							>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{ mt: 1, mb: 1 }}
								>
									Next
								</Button>
							</Box>
						</Grid>
						<Grid item xs={6}>
							<Box
								sx={{
									mt: 3,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Link href="/login" variant="body2">
									{"Have an account? Log In"}
								</Link>
							</Box>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
