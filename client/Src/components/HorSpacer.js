import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HorSpacer = ({children}) => {
  return (
    <View style={styles.horSpacer}>
      {children}
    </View>
  );
};

export default HorSpacer;

const styles = StyleSheet.create({
  horSpacer:{
    marginHorizontal: 20
  }
});
