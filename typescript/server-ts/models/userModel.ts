import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface UserInterface {
  _id: String;
  name: String;
  email: String;
  password: String;
}

const UserSchema = new Schema<UserInterface>({});

const UserModel = mongoose.model<UserInterface>("User", UserSchema);

export default UserModel;
