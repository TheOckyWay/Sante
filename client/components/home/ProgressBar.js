import React from "react";

function ProgressBar() {
	return (
		<div
			className="progress"
			style={{
				backgroundColor: "#d8d8d8",
				borderRadius: 20,
				height: 30,
				width: 200,
				marginLeft: 1,
			}}
		>
			<div
				className="progress-done"
				style={{
					opacity: 1,
					backgroundColor: "orange",
					borderRadius: 20,
					height: "100%",
					width: 60,
				}}
			></div>
		</div>
	);
}

export default ProgressBar;
