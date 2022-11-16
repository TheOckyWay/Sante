import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTrackers } from "./trackerSlice";
import SingleTracker from "./SingleTracker";

function AllTracker() {
  const dispatch = useDispatch();

  const trackers = useSelector((state) => state.tracker.allTracker);

  useEffect(() => {
    dispatch(fetchTrackers());
  }, []);

  return (
    <div>
      <h1>Trackers</h1>
        {trackers.map((tracker) => {
          return (
            <div key={tracker.id} >
              <div>
                <Link to={`/trackers/${tracker.id}`}>
                  <h2>{`${tracker.id}`}</h2>
                </Link>
                <h3>totalCalories: {tracker.totalCalories}</h3>
              </div>
            </div>
          );
        })}
      </div>
  );
}

export default AllTracker;
