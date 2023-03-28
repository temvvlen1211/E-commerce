import { request } from "express";
import Jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "token is requireid" });
  }
  try {
    const decoded = Jwt.verify(token, "1235678");
    req.user = decoded;
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({ success: false, message: "user not found" });
  }
  return next();
};

export default verifyToken;
