import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLinks from "../components/NavLinks";
import Spacer from "../components/Spacer";
import AuthContext from "../context/AuthContext";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      clearErrorMessage();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        navigation={navigation}
        headerText="Sign In from Tracker"
        btnTitle="Sign In"
        errorMessage={state.errMessage}
        onSubmitCallback={({ email, password }) =>
          signin({ email, password }, () => {
            navigation.navigate("Home");
          })
        }
      />

      <Spacer />
      <NavLinks
        HeadTitle="Don't have a Account ?"
        linkText="Sign Up here"
        handlePress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    marginBottom: 200,
  },
});
