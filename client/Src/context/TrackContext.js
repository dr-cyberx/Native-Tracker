import React, { createContext, useReducer } from "react";
import tracker from "../api/tracker";

const TrackContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch_tracks":
      return action.payload;

    default:
      break;
  }
};

export const TrackProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer);

  const fetchTrack = async () => {
    const response = await tracker.get("/track");
    // console.log("response data => ", response.data)
    dispatch({ type: "fetch_tracks", payload: response.data });
  };

  const createTrack = async (name, locations) => {
    // console.log(name, locations.length);
    await tracker.post("/track", { name, locations });
  };
  return (
    <TrackContext.Provider value={{ fetchTrack, createTrack, state }}>
      {children}
    </TrackContext.Provider>
  );
};

export default TrackContext;
