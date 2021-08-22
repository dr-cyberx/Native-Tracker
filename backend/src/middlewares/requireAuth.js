import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../models/Users";

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ errMessage: "You must be logged in" });
  }

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, "MY_SECRET_KEY", async (err, payload) => {
    if (err) {
      res.status(401).send({ errMessage: "You must be logged in" });
    }

    const { userId } = payload;
    const user = await User.findById(userId);

    req.user = user;

    next();
  }); 
};
