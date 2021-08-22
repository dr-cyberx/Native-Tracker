import mongoose from "mongoose";

const pointSchema = new mongoose.Schema({
  timeStamp: Number,
  coords: {
    latitude: Number,
    logitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number,
  },
});

const TrackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    default: "",
  },
  locations: [pointSchema],
});

export default mongoose.model("Track", TrackSchema);
