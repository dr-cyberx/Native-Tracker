import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import LocationContext from "../context/LocationContext";
import useSaveTrack from "../../hooks/useSaveTrack";
import Spacer from "./Spacer";
import HorSpacer from "./HorSpacer";

const TrackForm = () => {
  const { state, startRecording, stopRecording, changeName } =
    useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  const { name, recording, locations } = state;

  // console.log(locations.length);
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
        {!recording && locations.length ? (
          <TouchableOpacity
            onPress={saveTrack}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 25,
                color: "#3498db",
                marginTop: 20,
              }}
            >
              Save track
            </Text>
          </TouchableOpacity>
        ) : null}
      </HorSpacer>
    </>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
