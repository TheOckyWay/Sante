import React, { useState } from "react";
import {
	Grid,
	Box,
	Typography,
	FormControl,
	OutlinedInput,
	InputAdornment,
	Link,
} from "@mui/material";

function TargetMacros() {
	const [protein, setProtein] = useState("");
	const [carbs, setCarbs] = useState("");
	const [fat, setFat] = useState("");
	const [water, setWater] = useState("");

	const handleProteinChange = (event) => {
		setProtein(event.target.value);
	};
	const handleCarbsChange = (event) => {
		setCarbs(event.target.value);
	};
	const handleFatChange = (event) => {
		setFat(event.target.value);
	};
	const handleWaterChange = (event) => {
		setWater(event.target.value);
	};

	return (
		<div>
			<Grid container spacing={2}>
				<Grid item xs />
				<Grid item xs={4}>
					<Box
						sx={{
							border: "2px solid",
							borderRadius: 4,
							height: 75,
							width: 500,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Typography marginLeft={15} paddingTop={3} variant="h5">
							Target Calories: 2,500 cals.
						</Typography>
					</Box>
				</Grid>
				<Grid item xs />

				<Grid item xs={4} />
				<Grid item xs={4}>
					<FormControl sx={{ width: "15ch" }} variant="outlined">
						<Typography variant="subtitle1">Target Protein:</Typography>
						<OutlinedInput
							id="outlined-adornment-weight"
							value={protein}
							onChange={handleProteinChange}
							endAdornment={<InputAdornment position="end">g</InputAdornment>}
							inputProps={{
								"aria-label": "weight",
							}}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={4} />

				<Grid item xs={4} />
				<Grid item xs={4}>
					<FormControl sx={{ width: "15ch" }} variant="outlined">
						<Typography variant="subtitle1">Target Carbs:</Typography>
						<OutlinedInput
							id="outlined-adornment-weight"
							value={carbs}
							onChange={handleCarbsChange}
							endAdornment={<InputAdornment position="end">g</InputAdornment>}
							inputProps={{
								"aria-label": "weight",
							}}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={4} />

				<Grid item xs={4} />
				<Grid item xs={4}>
					<FormControl sx={{ width: "15ch" }} variant="outlined">
						<Typography variant="subtitle1">Target Fat:</Typography>
						<OutlinedInput
							id="outlined-adornment-weight"
							value={fat}
							onChange={handleFatChange}
							endAdornment={<InputAdornment position="end">g</InputAdornment>}
							inputProps={{
								"aria-label": "weight",
							}}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={4} />

				<Grid item xs={4} />
				<Grid item xs={4}>
					<FormControl sx={{ width: "15ch" }} variant="outlined">
						<Typography variant="subtitle1">Target Water:</Typography>
						<OutlinedInput
							id="outlined-adornment-weight"
							value={water}
							onChange={handleWaterChange}
							endAdornment={<InputAdornment position="end">ml</InputAdornment>}
							inputProps={{
								"aria-label": "weight",
							}}
						/>
					</FormControl>
					<Grid item>
						<Link href="/login" variant="body2">
							{"Have an account? Log In"}
						</Link>
					</Grid>
				</Grid>
				<Grid item xs={4} />
			</Grid>
		</div>
	);
}

export default TargetMacros;
