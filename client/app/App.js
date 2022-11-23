import React from "react";
import Navbar from "../components/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import { fetchSingleTracker,fetchTrackers } from "../components/tracker/trackerSlice";
import { useDispatch, useSelector } from "react-redux";



const App = () => {
	return (
		<div>
			<div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      		<h1 style={{border: 'solid black',padding: '5px' }}>Santé</h1>
     		</div>
			<hr/>
			<AppRoutes />
			<Navbar />
			
		</div>
	);
};

export default App;
