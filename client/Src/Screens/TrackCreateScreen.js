import React, { useContext, useState, useCallback } from "react";
import MapView, { Polyline } from "react-native-maps";
import LocationContext from "../context/LocationContext";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-elements";
import TrackForm from "../components/TrackForm";
import useLocation from "../../hooks/useLocation";
import Map from "../components/Map";

const TrackCreateScreen = ({ navigation }) => {
  const [shouldTrack, setShouldTrack] = useState(true);
  const { addLocations, state } = useContext(LocationContext);
  const callback = useCallback(
    (loc) => {
      addLocations(loc, state.recording);
    },
    [state.recording]
  );
  const [err] = useLocation(shouldTrack, callback);

  // this code also may be like this
  // const [err] = useLocation(addLocations);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setShouldTrack(false);
    });

    return unsubscribe;
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setShouldTrack(true);
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView
      style={{ marginTop: 25, paddingHorizontal: 25 }}
      edges={["top", "right", "left", "bottom"]}
    >
      <Map />
      {err ? <Text h3>Please Enable Location Permission</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
