import React, { createContext, useReducer } from "react";

const LocationContext = createContext();

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return {
        ...state,
        currentLocation: action.payload,
      };
    default:
      break;
  }
};

export const LocationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(locationReducer, {
    currentLocation: null,
    locations: [],
    recording: false,
  });

  const startRecording = () => {};
  const stopRecording = () => {};
  const addLocations = (location) => {
    console.log("add location func is here sir g !");
    dispatch({ type: "add_current_location", payload: location });
  };

  return (
    <LocationContext.Provider
      value={{ startRecording, stopRecording, addLocations, state }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
