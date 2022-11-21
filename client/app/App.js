import React from "react";
import Navbar from "../components/navbar/Navbar";
import AppRoutes from "./AppRoutes";

const App = () => {
	return (
		<div>
			<div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      		<h1 style={{border: 'solid black',padding: '5px' }}>Santé</h1>
     		</div>
			<hr/>
			<AppRoutes />
			<hr/>
			<Navbar />
			
		</div>
	);
};

export default App;
