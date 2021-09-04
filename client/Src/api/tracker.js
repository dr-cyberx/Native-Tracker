import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const tracker = axios.create({
  baseURL: "http://b086-2409-4055-4e8a-de-ddcf-771c-ed5f-adfb.ngrok.io",
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
