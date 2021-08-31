import React, { createContext, useReducer } from "react";

const LocationContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    default:
      break;
  }
};

export const LocationProvider = ({ children }) => {
  const { state, dispatch } = useReducer(reducer, {
    currentLocation: "",
    locations: "",
    recording: "",
  });

  const startRecording = () => {};
  const stopRecording = () => {};
  const addLocations = () => {};

  return (
    <LocationContext value={{ startRecording, stopRecording, addLocations }}>
      {children}
    </LocationContext>
  );
};

export default LocationContext;
