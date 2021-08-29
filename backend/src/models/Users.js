import mongoose from "mongoose";
import { genSalt, hash, compare } from "bcrypt";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", function (next) {
  // console.log("This => ", this);
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (CandidatePassword) {
  const user = this; 
  return new Promise((resolve, reject) => {
    compare(CandidatePassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }

      if (!isMatch) {
        return reject(false);
      }

      resolve(true);
    });
  });
};

export default mongoose.model("User", UserSchema);
