import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-elements";
import Map from "../components/Map";

const TrackCreateScreen = ({ navigation }) => {
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
