import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleTracker } from "./trackerSlice";
import TrackerForm from "./TrackerForm";

function SingleRecipe() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const tracker = useSelector((state) => state.tracker.singleTracker);
  const {
    id: trackerId,
    totalCalories,
    waterIntake,
    totalProtein,
    totalCarbs,
    totalFat,
    date,
  } = tracker;

  useEffect(() => {
    dispatch(fetchSingleTracker(id));
  }, []);

  return (
    <div>
      <div>
        <div>
          <h1>{trackerId}</h1>
          <h3>Calories: {totalCalories}</h3>
          <h3>water: {waterIntake}</h3>
          <h3>Protein: {totalProtein}</h3>
          <h3>Carbohydrates: {totalCarbs}</h3>
          <h3>Fat: {totalFat}</h3>
          <h3>Date: {date}</h3>
        </div>
        <div>
          <TrackerForm />
        </div>
      </div>
    </div>
  );
}

export default SingleRecipe;
