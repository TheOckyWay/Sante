import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleTracker, addToSingleTracker } from "./trackerSlice";

function TrackerForm() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [newFood, setNewFood] = useState({
    foodName: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
    courseType: "",
  });
  const [addedFood, setAddedFood] = useState([]);

  useEffect(() => {
    dispatch(fetchSingleTracker(id));
  }, []);

  // this seems bad, but whatever I guess
  useEffect(() => {
    dispatch(fetchSingleTracker(id));
  }, [newFood]);

  function handleAddFoodToTracker(e) {
    e.preventDefault();
    setAddedFood([
      ...addedFood,
      {
        key: addedFood.length,
        courseType: newFood.courseType,
        foodName: newFood.foodName,
      },
    ]);
    dispatch(addToSingleTracker({ id, newFood }));
    setNewFood({
      foodName: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
      courseType: "",
    });
  }

  let tracker = useSelector((state) => state.tracker.singleTracker);
  // const {
  //   id: trackerId,
  //   totalCalories,
  //   waterIntake,
  //   totalProtein,
  //   totalCarbs,
  //   totalFat,
  //   date,
  // } = tracker;

  return (
    <div>
      <div>
        <div>
          {tracker ? (
            <div>
              <h1>{tracker.id}</h1>
              <h3>Calories: {tracker.totalCalories}</h3>
              <h3>water: {tracker.waterIntake}</h3>
              <h3>Protein: {tracker.totalProtein}</h3>
              <h3>Carbohydrates: {tracker.totalCarbs}</h3>
              <h3>Fat: {tracker.totalFat}</h3>
              <h3>Date: {tracker.date}</h3>
            </div>
          ) : null}
        </div>
        <div>
          {addedFood.map((food) => {
            return (
              <div key={food.key}>
                <h4>{food.courseType}</h4>
                <p>{food.foodName}</p>
              </div>
            );
          })}
        </div>
        <div>
          <div>
            <form
              onSubmit={handleAddFoodToTracker}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
              }}
            >
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
              <button>Add Food to your Tracker</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackerForm;
