import React, { useContext } from "react";
import TrackContext from "../context/TrackContext";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Polyline, Circle } from "react-native-maps";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native-elements";

const TrackDetailScreen = ({ route, navigation }) => {
  const { _id } = route.params;
  const { state } = useContext(TrackContext);

  // console.log(state.track);

  const LineTrack = state.track?.find((trk) => trk._id === _id);
  const intialCoords = LineTrack.locations[0].coords;
  console.log("bla bla ", LineTrack);

  return (
    <SafeAreaView style={styles.container} edges={["top", "right", "bottom"]}>
      <Text style={{ textAlign: "center", color: "#34495e" }} h2>
        {LineTrack.name}
      </Text>
      <MapView
        style={{ height: 400, width: 600, marginTop: 25 }}
        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...intialCoords,
        }}
        region={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...intialCoords,
        }}
      >
        <Polyline
          lineDashPattern={[0]}
          coordinates={LineTrack?.locations.map((loc) => loc.coords)}
          strokeColor="#3498db"
          strokeWidth={6}
        />
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
