import express from "express";
import {
  createUserRoles,
  deleteUserRoles,
  getUserRolesById,
  getUsersRoles,
  updateUserRoles,
} from "../services/userRolesService";

const usersRolesRouter = express.Router();

usersRolesRouter.get("/", async (req, res) => {
  res.json(await getUsersRoles());
});

usersRolesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getUserRolesById(id));
});

usersRolesRouter.post("/", async (req, res) => {
  const userRoles = req.body;
  res.json(await createUserRoles(userRoles));
});

usersRolesRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const userRoles = req.body;
  res.json(await updateUserRoles(id, userRoles));
});

usersRolesRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteUserRoles(id));
});

export default usersRolesRouter;
