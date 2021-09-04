import React, { createContext } from "react";
import tracker from "../api/tracker";

const TrackContext = createContext();

export const TrackProvider = ({ children }) => {
  const fetchTrack = () => {};
  const createTrack = async (name, locations) => {
    console.log(name, locations.length);
    await tracker.post('/track', {name , locations})
  };
  return (
    <TrackContext.Provider value={{ fetchTrack, createTrack }}>
      {children}
    </TrackContext.Provider>
  );
};

export default TrackContext;
