import React, { useState } from "react";
import {
	Box,
	Stepper,
	Step,
	StepLabel,
	Button,
	Typography,
} from "@mui/material";
import BasicInfo from "./BasicInfo";
import WeightInfo from "./WeightInfo";

function StepperPage() {
	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const steps = [
		"Basic Info",
		"Weight",
		"Weight Goal",
		"Exercise",
		"Target Macros",
	];

	return (
		<>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					gap: 3,
					overflow: "auto hidden",
					"&::-webkit-scrollbar": { height: 10, WebkitAppearance: "none" },
					"&::-webkit-scrollbar-thumb": {
						borderRadius: 8,
						border: "2px solid",
						borderColor: "#E7EBF0",
						backgroundColor: "rgba(0 0 0 / 0.5)",
					},
				}}
			>
				<Stepper activeStep={activeStep}>
					{steps.map((label, index) => {
						const stepProps = {};
						const labelProps = {};

						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>
				<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
					<Button
						color="inherit"
						disabled={activeStep === 0}
						onClick={handleBack}
						sx={{ mr: 1 }}
					>
						Back
					</Button>
					<Box sx={{ flex: "1 1 auto" }} />
					<Button onClick={handleNext}>
						{activeStep === steps.length - 1 ? "Finish" : "Next"}
					</Button>
				</Box>
			</Box>
			<div>
				{activeStep === 0 ? <BasicInfo /> : ""}
				{activeStep === 1 || activeStep === 2 ? <WeightInfo activeStep={activeStep} /> : ""}
			</div>
		</>
	);
}

export default StepperPage;
