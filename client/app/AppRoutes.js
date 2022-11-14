import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm";
import Home from "../components/home/Home";
import Recipes from "../components/recipes/Recipes";
import SingleRecipe from "../components/recipes/SingleRecipe";
import AllTracker from "../components/tracker/AllTrackers";
import SingleTracker from "../components/tracker/SingleTracker";
import { me } from "./store";



/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/trackers" element={<AllTracker />} />
          <Route path="/recipes/:id" element={<SingleRecipe />} />
          <Route path="/trackers/:id" element={<SingleTracker />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
