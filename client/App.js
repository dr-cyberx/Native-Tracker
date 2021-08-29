import { StatusBar } from "expo-status-bar";
import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screens/HomeScreen";
import SigninScreen from "./src/Screens/SigninScreen";
import SignupScreen from "./src/Screens/SignupScreen";
import TrackCreateScreen from "./src/Screens/TrackCreateScreen";
import TrackDetailScreen from "./src/Screens/TrackDetailScreen";
import AccountScreen from "./src/Screens/AccountScreen";
import TrackListScreen from "./src/Screens/TrackListScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="trackListFlow" component={TrackListScreen} />
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <HomeStack.Navigator>
          <HomeStack.Screen
            options={{ headerShown: false }}
            name="SignUp"
            component={SignupScreen}
          />
          <HomeStack.Screen
            options={{ headerShown: false }}
            name="SignIn"
            component={SigninScreen}
          />
          <HomeStack.Screen
            options={{ headerShown: false }}
            name="Home"
            children={MainScreen}
          />
        </HomeStack.Navigator>
      </NavigationContainer>
    </AuthProvider>
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
