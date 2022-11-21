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
import { authenticate } from "../../app/store";

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
		dispatch(authenticate({ username, password, method: props.name }));
	};

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>

				<ErrorMessage />

				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="username"
						label="Username"
						name="username"
						error={error ? true : false}
						autoFocus
						// InputLabelProps={{ shrink: true }}
						onInput={(e) => setUsername(e.target.value)}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						error={error ? true : false}
						// InputLabelProps={{ shrink: true }}
						onInput={(e) => setPassword(e.target.value)}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mx: 2, mt: 1, mb: 1 }}
					>
						Sign In
					</Button>

					<Grid container>
						<Grid item>
							<Link href="/signup" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
}

export default LoginPage;
