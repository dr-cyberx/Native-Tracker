import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";

const NavLinks = ({ HeadTitle, handlePress, linkText }) => {
  return (
    <>
      <Text style={{ textAlign: "center" }} h4>
        {HeadTitle}
      </Text>
      <TouchableOpacity style={styles.signInpage} onPress={handlePress}>
        <Text style={{ color: "#00a8ff" }} h4>
          {linkText}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default NavLinks;

const styles = StyleSheet.create({
  signInpage: {
    alignSelf: "center",
    color: "#00a8ff",
  },
});
