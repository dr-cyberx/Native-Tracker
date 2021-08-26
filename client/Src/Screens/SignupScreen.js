import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function SigninScreen({navigation}) {
  return (
    <View>
      <Text style={{ fontSize: 22 }}>Sign up Screen</Text>
      <TouchableOpacity
        onPress={()=>{
          navigation.navigate('authpage', {}, { screen: 'signin' })
        }}
      >
        <Text style={{ fontSize: 16, color: "lightblue" }}>Go to sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
