import React, { useEffect, useState } from "react";
import { Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { requestForegroundPermissionsAsync } from "expo-location";
import MapView from "react-native-maps";
import HorSpacer from "./HorSpacer";

import Spacer from "./Spacer";

const Map = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestForegroundPermissionsAsync();
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <HorSpacer>
        <Text h1>Create Track</Text>
      </HorSpacer>
      <Spacer />
      <MapView style={styles.Map} />
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
