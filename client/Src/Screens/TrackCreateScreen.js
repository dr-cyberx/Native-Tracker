import React, { useState, useEffect, useContext } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import MapView, { Polyline } from "react-native-maps";
import AuthContext from "../context/AuthContext";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-elements";
import Map from "../components/Map";

const TrackCreateScreen = ({ navigation }) => {
  const { addLocations } = useContext(AuthContext);
  const [err, setErr] = useState(null);
  const [location, setLocation] = useState();

  const startWatching = async () => {
    try {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErr("Permission to access location was denied");
        return;
      }
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (loc) => {
          console.log(">>>>>><<<<<>>>>>", loc);
        }
      );
      // // setInterval(async () => {
      // let locationX = await getCurrentPositionAsync({});
      // setLocation(locationX);
      // }, 1000);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log("this is users location", location);
  }, [location]);

  useEffect(() => {
    startWatching();
  }, []);
  return (
    <SafeAreaView
      style={{ marginTop: 25, paddingHorizontal: 25 }}
      edges={["top", "right", "left", "bottom"]}
    >
      <Map />
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
