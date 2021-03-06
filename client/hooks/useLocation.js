import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

const useLocation = (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        let { status } = await requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErr("Permission to access location was denied");
          return;
        }
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 200,
            distanceInterval: 1,
          },
          callback
        );
      } catch (e) {
        console.log(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};

export default useLocation;
