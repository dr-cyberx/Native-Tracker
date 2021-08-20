import { Router } from "express";
import mongoose from "mongoose";
import User from "../models/Users";

const authRoute = Router();

authRoute.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const newUser = new User({ email, password });
  await newUser.save();
  res.send(req.body);
});

export default authRoute;
