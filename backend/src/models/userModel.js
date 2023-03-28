import mongoose from "mongoose";

export const User = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  role: {
    type: mongoose.Types.ObjectId,
    ref: "UserRole",
  },
  roles: {
    type: [mongoose.Types.ObjectId],
    ref: "UserRole",
  },

  password: String,
};

export const userSchema = new mongoose.Schema(User, { timestamps: true });
