import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Track List Screen</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TrackCreate");
        }}
      >
        <Text style={{ fontSize: 25, color: "lightblue" }}>Go to Track Create Screen </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
