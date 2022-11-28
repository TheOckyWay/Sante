import React from "react";
import Navbar from "../components/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import {
	fetchSingleTracker,
	fetchTrackers,
} from "../components/tracker/trackerSlice";
import { useDispatch, useSelector } from "react-redux";

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
				<h1 style={{ border: "solid #000", padding: "5px", color: "#000" }}>
					Santé
				</h1>
			</div>
			<hr className="hrStyle" />
			<AppRoutes />
			<Navbar />
		</div>
	);
};

export default App;
