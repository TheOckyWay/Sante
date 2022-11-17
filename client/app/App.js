import React from 'react';

import Navbar from '../components/navbar/Navbar';
import AppRoutes from './AppRoutes';

const App = () => {
	return (
		<div className="iphone">
			<Navbar />
			<AppRoutes />
		</div>
	);
};

export default App;
