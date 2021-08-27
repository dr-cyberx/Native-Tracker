import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TrackCreateScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Track Create Screen</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Account");
        }}
      >
        <Text style={{ fontSize: 25, color: "lightblue" }}>
          Go to Account Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
