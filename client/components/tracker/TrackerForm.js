import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { addToSingleTracker } from "./trackerSlice";

function TrackerForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [newFood, setNewFood] = useState({
    foodName: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
    courseType: "",
    water: "",
  });

  function handleAddFoodWaterTracker(e) {
    e.preventDefault();
    dispatch(addToSingleTracker({ id, newFood }));
    setNewFood({
      foodName: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
      courseType: "",
      water: "",
    });
    navigate(`/trackers/${id}`);
  }

  return (
    <div>
      {props.action === "addFood" ? (
        <form
          onSubmit={handleAddFoodWaterTracker}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <h1>Add Food</h1>
          <div>
            <label>
              Select Course Type:{" "}
              <select
                name="select-course-type"
                value={newFood.courseType}
                onChange={(e) => {
                  setNewFood({
                    ...newFood,
                    courseType: e.target.value,
                  });
                }}
              >
                <option>--Select Course--</option>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Snack</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Food Name:{" "}
              <input
                type="text"
                value={newFood.foodName}
                name="tracker-form-name"
                onChange={(e) => {
                  setNewFood({
                    ...newFood,
                    foodName: e.target.value,
                  });
                }}
              ></input>
            </label>
          </div>
          <div>
            <label>
              Calories:{" "}
              <input
                type="text"
                value={newFood.calories}
                name="tracker-form-calories"
                onChange={(e) => {
                  setNewFood({
                    ...newFood,
                    calories: e.target.value,
                  });
                }}
              ></input>
            </label>
          </div>
          <div>
            <label>
              Protein:{" "}
              <input
                type="text"
                value={newFood.protein}
                name="tracker-form-protein"
                onChange={(e) => {
                  setNewFood({
                    ...newFood,
                    protein: e.target.value,
                  });
                }}
              ></input>
            </label>
          </div>
          <div>
            <label>
              Carbs:{" "}
              <input
                type="text"
                value={newFood.carbs}
                name="tracker-form-carbs"
                onChange={(e) => {
                  setNewFood({
                    ...newFood,
                    carbs: e.target.value,
                  });
                }}
              ></input>
            </label>
          </div>
          <div>
            <label>
              Fat:{" "}
              <input
                type="text"
                value={newFood.fat}
                name="tracker-form-fat"
                onChange={(e) => {
                  setNewFood({
                    ...newFood,
                    fat: e.target.value,
                  });
                }}
              ></input>
            </label>
          </div>
          <button>Add Food to Tracker</button>
        </form>
      ) : (
        <div>
          <h1>Add Water</h1>
          <form
            onSubmit={handleAddFoodWaterTracker}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <div>
              <label>
                Water Consumed (milliliters):{" "}
                <input
                  type="text"
                  value={newFood.water}
                  name="tracker-form-water"
                  onChange={(e) => {
                    setNewFood({
                      ...newFood,
                      water: e.target.value,
                    });
                  }}
                ></input>
              </label>
            </div>
            <button>Add Water to Tracker</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TrackerForm;
