import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
	const isLoggedIn = useSelector((state) => !!state.auth.me.id);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<div>
			<h1>Sante</h1>
			<nav>
				{isLoggedIn ? (
					<div>
						{/* The navbar will show these links after you log in */}
						<Link to="/home">Home</Link>
						<Link to="/trackers">Tracker</Link>
						<Link to="/recipes">Recipes</Link>
						<Link to="/profile">Profile</Link>
					</div>
				) : (
					<div>
						{/* The navbar will show these links before you log in */}
						<Link to="/login">Login</Link>
						<Link to="/signup">Sign Up</Link>
					</div>
				)}
			</nav>
			<hr />
		</div>
	);
};

export default Navbar;
