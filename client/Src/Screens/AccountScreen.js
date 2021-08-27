import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AccountScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Account Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("trackListFlow");
        }}
      >
        <Text style={{ fontSize: 25, color: "lightblue" }}>
          Go To TrackListScreen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
