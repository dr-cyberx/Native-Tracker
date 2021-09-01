import React, { useContext } from "react";
import MapView, { Polyline } from "react-native-maps";
import LocationContext from "../context/LocationContext";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-elements";
import useLocation from "../../hooks/useLocation";
import Map from "../components/Map";

const TrackCreateScreen = ({ navigation }) => {
  const { addLocations } = useContext(LocationContext);
  const [err] = useLocation((loc) => addLocations(loc));
  // this code also may be like this
  // const [err] = useLocation(addLocations);

  return (
    <SafeAreaView
      style={{ marginTop: 25, paddingHorizontal: 25 }}
      edges={["top", "right", "left", "bottom"]}
    >
      <Map />
      {/* {err ? <Text h3>Please Enable Location Permission</Text> : null} */}
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
