import React, { createContext, useReducer } from "react";

const LocationContext = createContext();

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return {
        ...state,
        currentLocation: action.payload,
      };
    case "start_recording":
      return {
        ...state,
        recording: true,
      };
    case "stop_recording":
      return {
        ...state,
        recording: false,
      };
    case "add_locations":
      return {
        ...state,
        locations: [...state.locations, action.payload],
      };

    case "change_name":
      return {
        ...state,
        name: action.payload,
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
    name: "",
  });

  const changeName = (name) => {
    dispatch({ type: "change_name", payload: name });
  };
  const startRecording = () => {
    dispatch({ type: "start_recording" });
  };
  const stopRecording = () => {
    dispatch({ type: "stop_recording" });
  };
  const addLocations = (location, recording) => {
    dispatch({ type: "add_current_location", payload: location });
    if (recording) {
      dispatch({ type: "add_locations", payload: location });
    }
  };

  return (
    <LocationContext.Provider
      value={{ startRecording, stopRecording, addLocations, changeName, state }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
