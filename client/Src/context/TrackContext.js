import React, { createContext } from "react";
import TrackCreateScreen from "../Screens/TrackCreateScreen";

const TrackContext = createContext();

export const TrackProvider = ({ children }) => {
  const fetchTrack = () => {};
  const createTrack = (name, locations) => {
    console.log(name, locations.length);
  };
  return (
    <TrackContext.Provider value={{ fetchTrack, createTrack }}>
      {children}
    </TrackContext.Provider>
  );
};

export default TrackContext;
