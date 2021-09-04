import React, { useContext } from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ListItem } from "react-native-elements";
import TrackContext from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTrack } = useContext(TrackContext);

  console.log(state);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchTrack();
    });

    return unsubscribe;
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(item) => {
          item._id;
        }}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <ListItem key={item._id} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
