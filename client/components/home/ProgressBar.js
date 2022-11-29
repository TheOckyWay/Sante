import React from "react";

function ProgressBar({ done }) {
	return (
		<div class="progress">
			<div
				class="progress-done"
				style={{
					opacity: 1,
					width: `${done}%`,
				}}
			>
				{done}%
			</div>
		</div>
	);
}

export default ProgressBar;
