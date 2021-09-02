import React from "react";
import { StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import HorSpacer from "./HorSpacer";

const TrackForm = () => {
  return (
    <>
      <HorSpacer>
        <Input placeholder="Enter Name" />
        <Spacer />
        <Button title="Start Recording" />
      </HorSpacer>
    </>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
