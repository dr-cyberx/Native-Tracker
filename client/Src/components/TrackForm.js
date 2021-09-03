import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import LocationContext from "../context/LocationContext";
import Spacer from "./Spacer";
import HorSpacer from "./HorSpacer";

const TrackForm = () => {
  const { state, startRecording, stopRecording, changeName } =
    useContext(LocationContext);

  const { name, recording, locations } = state;

  console.log(locations.length);
  return (
    <>
      <HorSpacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter Name"
        />
        <Spacer />
        {recording ? (
          <Button title="Stop Recording" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </HorSpacer>
    </>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
