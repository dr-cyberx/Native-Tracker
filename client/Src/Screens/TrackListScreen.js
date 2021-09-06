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
      <Text style={{ textAlign: "center", color: "#34495e" }} h2>
        Tracks Lists
      </Text>
      {state?.track ? (
        <FlatList
          style={{ marginTop: 20 }}
          data={state.track}
          keyExtractor={(item) => {
            return item._id;
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TrackDetails", { _id: item._id });
              }}
              style={{ marginTop: 10 }}
            >
              <ListItem key={item._id} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          )}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
