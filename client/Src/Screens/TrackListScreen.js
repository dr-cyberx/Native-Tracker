import React, { useContext } from "react";
import { FlatList } from "react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListItem, Text } from "react-native-elements";
import TrackContext from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTrack } = useContext(TrackContext);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchTrack();
      console.log({ ...state });
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView
      style={{ marginTop: 25, paddingHorizontal: 25 }}
      edges={["top", "right", "left", "bottom"]}
    >
      <Text style={{ textAlign: "center" }} h1>
        Tracks Lists
      </Text>
      <FlatList
        style={{ marginTop: 20 }}
        data={state.track}
        keyExtractor={(item) => {
          return item._id;
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TrackDetails");
            }}
            style={{ marginTop: 10 }}
          >
            <ListItem key={item._id} bottomDivider>
              <ListItem.Content>
                {/* {console.log("item => ", item)} */}
                <ListItem.Title>{item.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
