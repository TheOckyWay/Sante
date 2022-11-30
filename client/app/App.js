import React from "react";
import Navbar from "../components/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import {
	fetchSingleTracker,
	fetchTrackers,
} from "../components/tracker/trackerSlice";
import { useDispatch, useSelector } from "react-redux";
import { padding } from "@mui/system";

const App = () => {
	return (
		<div id="entire-app">
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h1
					style={{
						border: " 1px solid rgba(247, 171, 10, 50)",
						padding: "10px",
						color: "rgba(247, 171, 10, 50)",
					}}
				>
					Santé
				</h1>
			</div>
			<hr className="hrStyle" style={{ backgroundColor: "black" }} />
			<AppRoutes />
			<Navbar />
		</div>
	);
};

export default App;
