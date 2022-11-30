import React, { useState } from "react";
import {
	Box,
	Container,
	TextField,
	Typography,
	Button,
	Grid,
	Link,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { authenticateLogin } from "../../app/store";

// InputLabelProps={{ shrink: true }} used to make text appear on top
// 	- If the code above is not present, the text inside is directly on the edge of the outline

function LoginPage(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	// returns 'incorrect username/password' as a string
	const { error } = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	function ErrorMessage() {
		if (error) {
			return (
				// text for error message
				<Typography variant="body2" color="red" sx={{ mt: 2 }}>
					Incorrect username or password. Please check again
				</Typography>
			);
		}
	}

	const handleSubmit = (evt) => {
		evt.preventDefault();
		dispatch(authenticateLogin({ username, password, method: props.name }));
	};

	return (
		<div>
			<Box
				sx={{
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
				}}
			>
				<Box
					sx={{
						height: 500,
						width: 450,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "#303030",
					}}
				>
					<Typography
						color="rgba(247, 171, 10, 50)"
						component="h1"
						variant="h5"
					>
						Sign in
					</Typography>

					<ErrorMessage />

					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{
							mt: 1,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<TextField
							sx={{
								width: "50ch",
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
							margin="normal"
							required
							id="username"
							label="Username"
							name="username"
							error={error ? true : false}
							autoFocus
							InputLabelProps={{ shrink: true }}
							onInput={(e) => setUsername(e.target.value)}
						/>
						<TextField
							margin="normal"
							sx={{
								width: "50ch",
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
							required
							name="password"
							label="Password"
							type="password"
							id="password"
							error={error ? true : false}
							InputLabelProps={{ shrink: true }}
							onInput={(e) => setPassword(e.target.value)}
						/>
						<Button
							type="submit"
							variant="contained"
							sx={{ mx: 2, mt: 1, mb: 1, width: "45ch" }}
						>
							Sign In
						</Button>

						<Grid container>
							<Grid item marginLeft={3}>
								<Link href="/signup" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Box>
		</div>
	);
}

export default LoginPage;
