import express, { json } from "express";
import cors from "cors";
import mongooseConfig from "./configs/mongoose-config";
import userRouter from "./routers/userRouter";
import userRolesRouter from "./routers/userRolesRouter";
import { loginUser, registerUser } from "./services/userService";

const PORT = 8000;
const app = express();

app.use(json());
app.use(cors());

app.get("/api/", (req, res) => {
  res.json("Hello world!");
});

app.use("/api/user/", userRouter);
app.use("/api/userRoles", userRolesRouter);

app.post("/api/register", async (req, res) => {
  const { email, password, repassword } = req.body;
  if (password !== repassword) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid password " });
  }
  const user = await registerUser({ email, password });
  console.log("user:", user);
  return res
    .status(200)
    .json({ success: true, message: "register successful" });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const response = await loginUser({ email, password });
  res.status(response.status).json(response);
});

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
