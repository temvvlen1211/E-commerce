import { userRoleSchema } from "../models/userRoleModel";
import mongoose from "mongoose";

const userRoleModel = mongoose.model("UserRole", userRoleSchema);

export const getUsersRoles = async () => {
  const usersRoles = await userRoleModel.find({});
  return usersRoles;
};

export const getUserRolesById = async (id) => {
  return await userRoleModel.findById(id);
};

export const createUserRoles = async (userRole) => {
  return await userRoleModel.create(userRole);
};

export const updateUserRoles = async (id, userRole) => {
  return await userRoleModel.findByIdAndUpdate(id, userRole, { new: true });
};

export const deleteUserRoles = async (id) => {
  return await userRoleModel.findByIdAndDelete(id);
};
