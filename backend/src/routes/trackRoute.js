import express from "express";
import { Router } from "express";
import Track from "../models/Track";
import mongoose from "mongoose";
import requireAuth from "../middlewares/requireAuth";

const trackRoute = Router();
trackRoute.use(requireAuth);

trackRoute.get("/track", async (req, res) => {
  const track = await Track.find({ userId: req.user._id });
  res.send({ track });
});

trackRoute.post("/track", async (req, res) => {
  const { name, locations } = req.body;
  console.log("entred track body");

  if (!name || !locations) {
    return res
      .status(422)
      .send({ errMessage: "Please enter name and locations" });
  }

  try {
    const track = new Track({ name, locations, userId: req.user._id });
    await track.save();
    console.log("track created");
    res.status(200).send(track);
  } catch (err) {
    res.status(422).send({ errMessage: err.message });
  }
});

export default trackRoute;
