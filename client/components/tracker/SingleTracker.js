import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleTracker } from "./trackerSlice";

function SingleRecipe() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const tracker = useSelector((state) => state.tracker.singleTracker);
  console.log(tracker)

  useEffect(() => {
    dispatch(fetchSingleTracker(id));
  }, []);

  return (
    <div>
      <div>
        <div>
          <h1>{tracker.id}</h1>
          <h3>Calories: {tracker.totalCalories}</h3>
          <h3>water: {tracker.waterIntake}</h3>
          <h3>Protein: {tracker.totalProtein}</h3>
          <h3>Carbohydrates: {tracker.totalCarbs}</h3>
          <h3>Fat: {tracker.totalFat}</h3>
          <h3>Date: {tracker.date}</h3>
        </div>
      </div>
    </div>
  );
}

export default SingleRecipe;
