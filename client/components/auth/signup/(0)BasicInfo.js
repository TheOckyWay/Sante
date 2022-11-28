import React, { useState } from "react";
import {
	TextField,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	Grid,
	Box,
	FormControlLabel,
	FormLabel,
	RadioGroup,
	Radio,
	Link,
	Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// create user and connect to backend
// username and password close together, make everything like that
// try to not make them full width - too big

function BasicInfo() {
	const [values, setValues] = useState({
		password: "",
		showPassword: false,
	});

	const [sex, setSex] = useState("");

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleSexChange = (event) => {
		setSex(event.target.value);
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

	return (
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

			<Box
				sx={{
					width: "auto",
				}}
			>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<TextField
							margin="normal"
							fullWidth
							id="name"
							label="Name"
							name="name"
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							margin="normal"
							fullWidth
							id="email"
							label="Email"
							name="email"
						/>
					</Grid>

					<Grid
						item
						xs={12}
						sx={{
							mb: 1,
							pb: 1,
						}}
					>
						<TextField
							margin="normal"
							fullWidth
							id="username"
							label="Username"
							name="username"
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
						<TextField margin="normal" id="age" label="Age" name="age" />
					</Grid>
					<Grid item xs />

					<Grid item xs={12}>
						<FormControl justifyContent="center">
							<FormLabel id="gender-radio-buttons-group">Sex</FormLabel>
							<RadioGroup
								aria-labelledby="gender-radio-buttons-group"
								row
								name="gender-radio-buttons-group"
								value={sex}
								onChange={handleSexChange}
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
					<Grid item>
						<Link href="/login" variant="body2">
							{"Have an account? Log In"}
						</Link>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}

export default BasicInfo;
