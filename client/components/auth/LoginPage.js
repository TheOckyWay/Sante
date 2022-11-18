import React, { useState } from 'react';
import {
	Box,
	Container,
	createTheme,
	CssBaseline,
	TextField,
	ThemeProvider,
	Typography,
	Button,
	Grid,
	Link,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../../app/store';

function LoginPage() {
	const theme = createTheme();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { error } = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(email, password);
		// const formName = evt.target.name;
		// const username = evt.target.username.value;
		// const password = evt.target.password.value;
		// dispatch(authenticate({ username, password, method: formName }));
	};

	// return (
		// <Container component="main" maxWidth="xs">
		// 	<CssBaseline />

		// 	<Box
		// 		sx={{
		// 			marginTop: 8,
		// 			display: 'flex',
		// 			flexDirection: 'column',
		// 			alignItems: 'center',
		// 		}}
		// 	>
		// 		<Typography component="h1" variant="h5">
		// 			Sign in
		// 		</Typography>

		// 		<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
		// 			<TextField
		// 				margin="normal"
		// 				required
		// 				fullWidth
		// 				id="email"
		// 				label="Email Address"
		// 				name="email"
		// 				autoFocus
		// 			/>
		// 			<TextField
		// 				margin="normal"
		// 				required
		// 				fullWidth
		// 				name="password"
		// 				label="Password"
		// 				type="password"
		// 				id="password"
		// 			/>
		// 			<Button
		// 				type="submit"
		// 				fullWidth
		// 				variant="contained"
		// 				sx={{ mt: 3, mb: 2 }}
		// 			>
		// 				Sign In
		// 			</Button>

		// 			<Grid container>
		// 				<Grid item>
		// 					<Link href="#" variant="body2">
		// 						{"Don't have an account? Sign Up"}
		// 					</Link>
		// 				</Grid>
		// 			</Grid>
		// 		</Box>
		// 	</Box>
		// </Container>
	// );
}

export default LoginPage;
