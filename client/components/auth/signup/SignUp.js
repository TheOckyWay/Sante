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
	Link,
	Radio,
	RadioGroup,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateSignup } from "../authSlice";

function SignUp({ name }) {
	const dispatch = useDispatch();

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
					<Typography color="rgba(247, 171, 10, 50)" variant="h3">
						Welcome!
					</Typography>
				</Box>
				<Grid container spacing={1}>
					<Grid item xs={12}>
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
									},
								},
								"& .MuiOutlinedInput-root.Mui-focused": {
									"& > fieldset": {
										borderColor: "rgba(247, 171, 10, 50)",
									},
								},
							}}
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
							color="primary"
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
							color="primary"
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
							color="primary"
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
							margin="normal"
							fullWidth
							id="email"
							label="Email"
							name="email"
							onChange={handleChange("email")}
						/>
					</Grid>

					<Grid item xs={12}>
						<FormControl
							variant="outlined"
							fullWidth={true}
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
											sx={{
												color: "rgba(247, 171, 10, 50)",
											}}
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
							color="primary"
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
							margin="normal"
							id="age"
							label="Age"
							name="age"
							onChange={handleChange("age")}
						/>
					</Grid>
					<Grid item xs />

					<Grid item xs={12}>
						<FormControl
							justifyContent="center"
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
							<FormLabel id="gender-radio-buttons-group">Sex</FormLabel>
							<RadioGroup
								aria-labelledby="gender-radio-buttons-group"
								row
								name="gender-radio-buttons-group"
								value={values.sex}
								onChange={handleChange("sex")}
							>
								<FormControlLabel
									sx={{
										color: "rgba(247, 171, 10, 50)",
									}}
									value="female"
									control={
										<Radio
											sx={{
												color: "rgba(247, 171, 10, 50)",
												"&.Mui-checked": {
													color: "rgba(247, 171, 10, 50)",
												},
											}}
										/>
									}
									label="Female"
								/>
								<FormControlLabel
									sx={{
										color: "rgba(247, 171, 10, 50)",
									}}
									value="male"
									control={
										<Radio
											sx={{
												color: "rgba(247, 171, 10, 50)",
												"&.Mui-checked": {
													color: "rgba(247, 171, 10, 50)",
												},
											}}
										/>
									}
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
						<Typography color="rgba(247, 171, 10, 50)" variant="subtitle2">
							What is your current weight?
						</Typography>
					</Grid>
					<Grid item xs={6} />

					<Grid item xs={4}>
						<Box display="flex">
							<FormControl
								sx={{
									m: 1,
									width: "15ch",
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
								<OutlinedInput
									id="outlined-adornment-weight"
									value={values.startingWeight}
									onChange={handleChange("startingWeight")}
									endAdornment={
										<InputAdornment position="end">
											<Typography sx={{ color: "rgba(247, 171, 10, 50)" }}>
												lbs
											</Typography>
										</InputAdornment>
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
						<Typography color="rgba(247, 171, 10, 50)" variant="subtitle2">
							What is your target weight?
						</Typography>
					</Grid>
					<Grid item xs={6} />

					<Grid item xs={4}>
						<Box display="flex">
							<FormControl
								sx={{
									m: 1,
									width: "15ch",
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
								<OutlinedInput
									id="outlined-adornment-weight"
									value={values.targetWeight}
									onChange={handleChange("targetWeight")}
									endAdornment={
										<InputAdornment
											color="rgba(247, 171, 10, 50)"
											position="end"
										>
											<Typography sx={{ color: "rgba(247, 171, 10, 50)" }}>
												lbs
											</Typography>
										</InputAdornment>
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
							<Typography color="rgba(247, 171, 10, 50)" variant="subtitle2">
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
										sx={{
											color: "rgba(247, 171, 10, 50)",
										}}
										value="Sedentary"
										control={
											<Radio
												sx={{
													color: "rgba(247, 171, 10, 50)",
													"&.Mui-checked": {
														color: "rgba(247, 171, 10, 50)",
													},
												}}
											/>
										}
										label="Sedentary (little or no exercise)"
									/>
									<FormControlLabel
										value="Lightly Active"
										sx={{
											color: "rgba(247, 171, 10, 50)",
										}}
										control={
											<Radio
												sx={{
													color: "rgba(247, 171, 10, 50)",
													"&.Mui-checked": {
														color: "rgba(247, 171, 10, 50)",
													},
												}}
											/>
										}
										label="Lighly Active (1-2 times per week)"
									/>
									<FormControlLabel
										value="Moderately Active"
										sx={{
											color: "rgba(247, 171, 10, 50)",
										}}
										control={
											<Radio
												sx={{
													color: "rgba(247, 171, 10, 50)",
													"&.Mui-checked": {
														color: "rgba(247, 171, 10, 50)",
													},
												}}
											/>
										}
										label="Moderately Active (3-5 times per week)"
									/>
									<FormControlLabel
										value="Very Active"
										sx={{
											color: "rgba(247, 171, 10, 50)",
										}}
										control={
											<Radio
												sx={{
													color: "rgba(247, 171, 10, 50)",
													"&.Mui-checked": {
														color: "rgba(247, 171, 10, 50)",
													},
												}}
											/>
										}
										label="Very Active (6-7 times per week)"
									/>
									<FormControlLabel
										value="Extra Active"
										sx={{
											color: "rgba(247, 171, 10, 50)",
										}}
										control={
											<Radio
												sx={{
													color: "rgba(247, 171, 10, 50)",
													"&.Mui-checked": {
														color: "rgba(247, 171, 10, 50)",
													},
												}}
											/>
										}
										label="Extra Active (Athelete)"
									/>
								</RadioGroup>
							</FormControl>
						</Grid>

						<Grid marginTop={3} item xs={12}>
							<FormControl
								sx={{
									width: "15ch",
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
								variant="outlined"
							>
								<Typography color="rgba(247, 171, 10, 50)" variant="subtitle2">
									Target Water:
								</Typography>
								<OutlinedInput
									id="outlined-adornment-weight"
									value={values.targetWater}
									onChange={handleChange("targetWater")}
									endAdornment={
										<InputAdornment position="end">
											<Typography sx={{ color: "rgba(247, 171, 10, 50)" }}>
												ml
											</Typography>
										</InputAdornment>
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
