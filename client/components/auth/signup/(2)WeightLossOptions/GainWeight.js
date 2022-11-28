import React, { useState } from "react";
import {
	Grid,
	Typography,
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
	Link,
} from "@mui/material";

function GainWeight() {
	const [goal, setGoal] = useState("");

	const handleChange = (event) => {
		setGoal(event.target.value);
	};

	return (
		<div>
			<Grid container spacing={2}>
				<Grid item xs={3} />
				<Grid item xs={6}>
					<Typography align="center" variant="h5">
						What is your weekly goal?
					</Typography>
				</Grid>
				<Grid item xs={3} />

				<Grid item xs={5} />
				<Grid item xs={2}>
					<FormControl>
						<RadioGroup
							aria-labelledby="activity-radio-buttons-group"
							name="activity-radio-buttons-group"
							value={goal}
							onChange={handleChange}
						>
							<FormControlLabel
								value="gain0.5pounds"
								control={<Radio />}
								label="Gain .5 lbs"
							/>
							<FormControlLabel
								value="gain1pound"
								control={<Radio />}
								label="Gain 1 lb."
							/>
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item xs={5} />
				<Grid item>
					<Link href="/login" variant="body2">
						{"Have an account? Log In"}
					</Link>
				</Grid>
			</Grid>
		</div>
	);
}

export default GainWeight;
