import { verifyToken } from "../utils/jwt.js";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "token required" });
  }

  console.log("Auth Header:", authHeader);

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "token missing" });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    console.log("Decoded:", decoded);
    next();
  } catch (err) {
    return res.status(401).json({ message: "invalid token" });
  }
};

