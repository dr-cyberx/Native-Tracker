import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const SigninScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sign in Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text style={{ fontSize: 22, color: "lightblue", textAlign: "center" }}>
          Go to Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={{marginTop: 20}}
        onPress={() => {
          navigation.navigate("Home",{screen: 'Create'});
        }}
      >
        <Text style={{ fontSize: 22, color: "blue", textAlign: "center" }}>
          Go to Main Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({});
