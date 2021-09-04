import React, { useEffect, useState, useContext } from "react";
import { Text } from "react-native-elements";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import MapView, { Polyline, Circle } from "react-native-maps";
import LocationContext from "../context/LocationContext";
import HorSpacer from "./HorSpacer";
import Spacer from "./Spacer";

const Map = () => {
  const { state } = useContext(LocationContext);
  const { currentLocation, locations } = state;

  // console.log("location array: ", locations);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

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
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="rgba(158,158,255,1.0)"
          fillColor="rgba(158, 158, 255, 0.3)"
        />
        <Polyline
          lineDashPattern={[0]}
          coordinates={locations.map((loc) => loc.coords)}
          strokeColor="#3498db"
          strokeWidth={6}
        />
      </MapView>
      <Spacer />
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
