import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const tracker = axios.create({
  baseURL: "http://c49d-106-213-6-11.ngrok.io",
});

tracker.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default tracker;
