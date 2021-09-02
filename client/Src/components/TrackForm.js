import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import LocationContext from "../context/LocationContext";
import Spacer from "./Spacer";
import HorSpacer from "./HorSpacer";

const TrackForm = () => {
  const { state, startRecording, stopRecording, changeName } =
    useContext(LocationContext);
  return (
    <>
      <HorSpacer>
        <Input
          value={state.name}
          onChangeText={changeName}
          placeholder="Enter Name"
        />
        <Spacer />
        <Button title="Start Recording" />
      </HorSpacer>
    </>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
