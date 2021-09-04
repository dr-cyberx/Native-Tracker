import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import TrackContext from "../src/context/TrackContext";
import LocationContext from "../src/context/LocationContext";

const useSaveTrack = () => {
  const { createTrack } = useContext(TrackContext);
  const { state } = useContext(LocationContext);

  const { locations, name } = state;

  const saveTrack = () => {
    createTrack(name, locations);
  };

  return [saveTrack];
};

export default useSaveTrack;
