import { StatusBar } from "expo-status-bar";
import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import { LocationProvider } from "./src/context/LocationContext";
import { TrackProvider } from "./src/context/TrackContext";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screens/HomeScreen";
import SigninScreen from "./src/Screens/SigninScreen";
import SignupScreen from "./src/Screens/SignupScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TrackCreateScreen from "./src/Screens/TrackCreateScreen";
import TrackDetailScreen from "./src/Screens/TrackDetailScreen";
import AccountScreen from "./src/Screens/AccountScreen";
import TrackListScreen from "./src/Screens/TrackListScreen";
import FlashScreen from "./src/Screens/FlashScreen";
import { Entypo, Ionicons, MaterialCommunityIcons  } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: "#f5f6fa",
      }}
      screenOptions={{tabBarStyle:{
        height:80
      }}}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <Entypo name="list" size={30} color="black" />,
          title:'',
        }}
        name="trackListFlow"
        component={TrackListScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="pluscircleo" size={30} color="black" />
          ),
          title:'',
        }}
        name="TrackCreate"
        component={TrackCreateScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialCommunityIcons name="account" size={30} color="black" />,
          title:'',
        }}
        name="Account"
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <TrackProvider>
        <LocationProvider>
          <AuthProvider>
            <NavigationContainer>
              <HomeStack.Navigator>
                <HomeStack.Screen
                  options={{ headerShown: false }}
                  name="flashScreen"
                  component={FlashScreen}
                />
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
                  name="TrackDetails"
                  component={TrackDetailScreen}
                />
                <HomeStack.Screen
                  options={{
                    title: "My home",
                  }}
                  options={{ headerShown: false }}
                  name="Home"
                  children={MainScreen}
                />
              </HomeStack.Navigator>
            </NavigationContainer>
          </AuthProvider>
        </LocationProvider>
      </TrackProvider>
    </SafeAreaProvider>
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
