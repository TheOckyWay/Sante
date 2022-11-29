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

function Exercise() {
	const [exercise, setExercise] = useState("");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div>
			<Grid container spacing={2}>
				<Grid item xs={3} />
				<Grid item xs={6}>
					<Typography align="center" variant="h5">
						How much do you exercise daily?
					</Typography>
				</Grid>
				<Grid item xs={3} />

				<Grid item xs={4} />
				<Grid item xs={4}>
					<FormControl>
						<RadioGroup
							aria-labelledby="activity-radio-buttons-group"
							name="activity-radio-buttons-group"
							value={value.exercise}
							onChange={handleChange("exercise")}
						>
							<FormControlLabel
								value="Sedentary"
								control={<Radio />}
								label="Sedentary (little or no exercise)"
							/>
							<FormControlLabel
								value="Lightly Active"
								control={<Radio />}
								label="Lighly Active (1-2 times per week)"
							/>
							<FormControlLabel
								value="Moderately Active"
								control={<Radio />}
								label="Moderately Active (3-5 times per week)"
							/>
							<FormControlLabel
								value="Very Active"
								control={<Radio />}
								label="Very Active (6-7 times per week)"
							/>
							<FormControlLabel
								value="Extra Active"
								control={<Radio />}
								label="Extra Active (Athelete)"
							/>
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item xs={4} />
				<Grid item>
					<Link href="/login" variant="body2">
						{"Have an account? Log In"}
					</Link>
				</Grid>
			</Grid>
		</div>
	);
}

export default Exercise;
