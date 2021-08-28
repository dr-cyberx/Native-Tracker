import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Spacer = ({ children }) => {
  return (
    <View style={styles.spacer}>
      <Text>{children}</Text>
    </View>
  );
};

export default Spacer;

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});
