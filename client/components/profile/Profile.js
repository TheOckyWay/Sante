import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './profileSlice';

function Profile() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUser(user.id));
	}, [dispatch]);

	// o: destructure
	const user = useSelector((state) => state.auth.me);

	return (
		<div>
			<h3>Userame: {user.username}</h3>
			<h3>
				Name: {user.firstName} {user.lastName}
			</h3>
			<h3>Location: {user.location}</h3>
			<h3>Email: {user.email}</h3>
		</div>
	);
}

export default Profile;
