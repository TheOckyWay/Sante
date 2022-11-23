import React, { useState } from "react";
import {
	Grid,
	Typography,
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
} from "@mui/material";

function LoseWeight() {
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
								value="lose0.5pounds"
								control={<Radio />}
								label="Lose .5 lbs"
							/>
							<FormControlLabel
								value="lose1pound"
								control={<Radio />}
								label="Lose 1 lb."
							/>
							<FormControlLabel
								value="lose1.5pounds"
								control={<Radio />}
								label="Lose 1.5 lbs."
							/>
							<FormControlLabel
								value="lose2pounds"
								control={<Radio />}
								label="Lose 2 lbs."
							/>
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item xs={5} />
			</Grid>
		</div>
	);
}

export default LoseWeight;
