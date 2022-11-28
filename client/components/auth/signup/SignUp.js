import {
	Box,
	Grid,
	TextField,
	Typography,
	FormControl,
	InputLabel,
	OutlinedInput,
	IconButton,
	InputAdornment,
	Button,
	Stepper,
	Step,
	StepLabel,
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
		dispatch(authenticateSignup({ values, method: name }));
		navigate("/signup/basic_info");
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

					<Grid item xs />
					<Grid item xs={8}>
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
								sx={{ mx: 2, mt: 1, mb: 1 }}
							>
								Next
							</Button>
						</Box>
					</Grid>
					<Grid item xs />
				</Grid>
			</div>
		</div>
	);
}

export default SignUp;
