import React, { useEffect, useState } from "react";
import { Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import MapView, { Polyline } from "react-native-maps";
import HorSpacer from "./HorSpacer";

import Spacer from "./Spacer";

const Map = () => {
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
    <View style={styles.container}>
      <HorSpacer>
        <Text h1>Create Track</Text>
      </HorSpacer>
      <Spacer />
      <MapView style={styles.Map}>
        <Polyline />
      </MapView>
      <Spacer />
      {err ? <Text h3>Please Enable Location Permission</Text> : null}
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  Map: {
    height: 400,
    width: 600,
  },
});
