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
			<h1>Welcome!</h1>
			<Box
				sx={{
					width: "auto",
				}}
			>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							margin="normal"
							fullWidth
							id="name"
							label="Name"
							name="name"
							// InputLabelProps={{ shrink: true }}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							margin="normal"
							fullWidth
							id="email"
							label="Email"
							name="email"
							// InputLabelProps={{ shrink: true }}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							margin="normal"
							fullWidth
							id="username"
							label="Username"
							name="username"
							// InputLabelProps={{ shrink: true }}
						/>
					</Grid>

					<Grid item xs={12}>
						<FormControl
							// sx={{ m: 1 }}
							variant="outlined"
							fullWidth={true}
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
										>
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>
						</FormControl>
					</Grid>

					<Grid item xs={2}>
						<TextField
							margin="normal"
							id="age"
							label="Age"
							name="age"
							// InputLabelProps={{ shrink: true }}
						/>
					</Grid>
					<Grid item xs={10} />

					<Grid item xs={2} />
					<Grid item xs={8}>
						<FormControl>
							<FormLabel id="gender-radio-buttons-group">Sex</FormLabel>
							<RadioGroup
								aria-labelledby="gender-radio-buttons-group"
								row
								name="gender-radio-buttons-group"
								value={sex}
								onChange={handleSexChange}
							>
								<FormControlLabel
									sx={{
										marginLeft: 8,
										marginRight: 8,
									}}
									value="female"
									control={<Radio />}
									label="Female"
								/>
								<FormControlLabel
									sx={{
										marginLeft: 8,
										marginRight: 8,
									}}
									value="male"
									control={<Radio />}
									label="Male"
								/>
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item sx={2} />
				</Grid>
			</Box>
		</div>
	);
}

export default BasicInfo;
