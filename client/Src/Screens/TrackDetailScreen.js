import React, { useContext } from "react";
import TrackContext from "../context/TrackContext";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Polyline, Circle } from "react-native-maps";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native-elements";

const TrackDetailScreen = ({ route, navigation }) => {
  const { _id } = route.params;
  const { state } = useContext(TrackContext);

  console.log(_id);

  return (
    <SafeAreaView style={styles.container} edges={["top", "right", "bottom"]}>
      <Text style={{ textAlign: "center" }} h2>
        Track Details
      </Text>
      <MapView style={{ height: 400, width: 600, marginTop: 25 }}>
        {/* <Polyline
          lineDashPattern={[0]}
          coordinates={state.track.map((loc) => loc.coords)}
          strokeColor="#3498db"
          strokeWidth={6}
        /> */}
      </MapView>
    </SafeAreaView>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 25,
  },
});
