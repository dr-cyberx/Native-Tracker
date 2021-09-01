import React, { useEffect, useState, useContext } from "react";
import { Text } from "react-native-elements";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import MapView, { Polyline } from "react-native-maps";
import LocationContext from "../context/LocationContext";
import HorSpacer from "./HorSpacer";
import Spacer from "./Spacer";

const Map = () => {
  const { state } = useContext(LocationContext);
  const { currentLocation } = state;

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  console.log("This is state inside the map comp ", state);

  return (
    <View style={styles.container}>
      <HorSpacer>
        <Text h1>Create Track</Text>
      </HorSpacer>
      <Spacer />
      <MapView
        style={styles.Map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* <Polyline /> */}
      </MapView>
      <Spacer />
      {/* {err ? <Text h3>Please Enable Location Permission</Text> : null} */}
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
