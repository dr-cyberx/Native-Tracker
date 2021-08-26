import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, Text, View } from "react-native";
import SigninScreen from "./Src/Screens/SigninScreen";
import SignupScreen from "./Src/Screens/SignupScreen";
import TrackCreateScreen from "./Src/Screens/TrackCreateScreen";
import TrackDetailScreen from "./Src/Screens/TrackDetailScreen";
import TrackListScreen from "./Src/Screens/TrackListScreen";
import AccountScreen from "./Src/Screens/AccountScreen";
import HomeScreen from "./Src/Screens/HomeScreen";

const Stack = createNativeStackNavigator();
const MaterialBottomTabs = createBottomTabNavigator();

function HomeTab() {
  return (
    <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen name="signIn" component={SigninScreen} />
      <MaterialBottomTabs.Screen name="sipnUp" component={SignupScreen} />
    </MaterialBottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" children={HomeScreen} />
        <Stack.Screen name="creds" options={{ headerShown: false }} component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
