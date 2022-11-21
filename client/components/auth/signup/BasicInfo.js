import React from "react";
import {
	Stack,
	TextField,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function BasicInfo() {
	const [values, setValues] = React.useState({
		password: "",
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

	return (
		<div>
			<h1>Welcome!</h1>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={2}
			>
				<TextField
					margin="normal"
					fullWidth
					id="name"
					label="Name"
					name="name"
					// InputLabelProps={{ shrink: true }}
				/>
				<TextField
					margin="normal"
					fullWidth
					id="email"
					label="Email"
					name="email"
					// InputLabelProps={{ shrink: true }}
				/>
				<TextField
					margin="normal"
					fullWidth
					id="username"
					label="Username"
					name="username"
					// InputLabelProps={{ shrink: true }}
				/>
				<FormControl sx={{ m: 1 }} variant="outlined" fullWidth={true}>
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
			</Stack>
		</div>
	);
}

export default BasicInfo;
