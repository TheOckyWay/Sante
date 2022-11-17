import React from 'react';
import { Box, TextField } from '@mui/material';

function LoginPage() {
	return (
		<div>
			<h1>Welcome Back!</h1>
			<Box
				component="form"
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField id="outlined-basic" label="Username" variant="outlined" />
			</Box>
		</div>
	);
}

export default LoginPage;
