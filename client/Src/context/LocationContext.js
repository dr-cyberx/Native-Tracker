import React, { createContext, useReducer } from "react";

const LocationContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    default:
      break;
  }
};

export const LocationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    currentLocation: null,
    locations: [],
    recording: false,
  });

  const startRecording = () => {};
  const stopRecording = () => {};
  const addLocations = () => {};

  return (
    <LocationContext.Provider
      value={{ startRecording, stopRecording, addLocations }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
