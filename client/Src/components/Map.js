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
 

  return (
    <View style={styles.container}>
      <HorSpacer>
        <Text h1>Create Track</Text>
      </HorSpacer>
      <Spacer />
      <MapView style={styles.Map}>
        {/* <Polyline /> */}
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
