import React from "react";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";

const AuthForm = ({ name }) => {
	if (name === "login") {
		return <LoginPage name={name} />;
	} else if (name === "signup") {
		return <SignUp name={name} />;
	}
};

export default AuthForm;
