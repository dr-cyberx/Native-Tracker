import { Router } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import User from "../models/Users";

const authRoute = Router();

authRoute.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = new User({ email, password });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, "MY_SECRET_KEY");
    res.send({ token });
    
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

authRoute.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .send({ errMessage: "must provide Email & Password" });
  }

  const foundUser = await User.findOne({ email });
  // console.log("found User", foundUser);

  if (!foundUser) {
    return res.status(402).send({ errMessage: "Invalid Email or password" });
  }

  try {
    await foundUser.comparePassword(password);
    const token = jwt.sign({ userId: foundUser._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    console.log(">>>>>>>>>>>>>>>", err)
    return res.status(422).send({ errMessage: "Invalid Email or password niche vala" });
  }
});

export default authRoute;
