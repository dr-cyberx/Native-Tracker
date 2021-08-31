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

  return <LocationContext>{children}</LocationContext>;
};

export default LocationContext;
