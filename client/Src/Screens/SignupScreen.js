import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sign up Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        <Text style={{ fontSize: 22, color: "lightblue", textAlign: "center" }}>
          Go to Sign In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => {
          navigation.navigate("Home", { screen: "Create" });
        }}
      >
        <Text style={{ fontSize: 22, color: "blue", textAlign: "center" }}>
          Go Main Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
