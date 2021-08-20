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

    const token = jwt.sign({userId: newUser._id}, 'MY_SECRET_KEY');
    res.send({token});
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

export default authRoute;
