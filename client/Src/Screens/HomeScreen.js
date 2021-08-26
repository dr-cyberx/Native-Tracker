import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 22 }}>This is Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("creds", { screen: "signIn" });
        }}
      >
        <Text style={{ fontSize: 22 }}>Goto signIn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
