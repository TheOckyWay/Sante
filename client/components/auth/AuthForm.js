import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../../app/store";
import LoginPage from "./LoginPage";
import SignupPage from "./signup/SignupPage";

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name }) => {
	const dispatch = useDispatch();

	if (name === "login") {
		return <LoginPage name={name} />;
	} else if (name === "signup") {
		return <SignupPage />;
	}
};

export default AuthForm;
