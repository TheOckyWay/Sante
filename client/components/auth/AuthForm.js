import React from "react";
import LoginPage from "./LoginPage";
import SignUp from "./signup/SignUp";

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name }) => {

	if (name === "login") {
		return <LoginPage name={name} />;
	} else if (name === "signup") {
		return <SignUp name={name} />;
	}
};

export default AuthForm;
