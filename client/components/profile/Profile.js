import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./profileSlice";
import { logout } from "../../app/store";
import { useNavigate } from "react-router-dom";

function Profile() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logoutAndRedirectHome = () => {
		dispatch(logout());
		navigate("/login");
	};

	useEffect(() => {
		dispatch(fetchUser(user.id));
	}, [dispatch]);

	const user = useSelector((state) => state.auth.me);

	return (
		<div>
			<h3>Userame: {user.username}</h3>
			<h3>
				Name: {user.firstName} {user.lastName}
			</h3>
			<h3>Location: {user.location}</h3>
			<h3>Email: {user.email}</h3>
			<button type="button" onClick={logoutAndRedirectHome}>
				Logout
			</button>
		</div>
	);
}

export default Profile;
