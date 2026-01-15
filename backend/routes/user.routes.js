import express from "express";
import { getMe, updateMe } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { deleteMe } from "../controllers/user.controller.js";
// import { updateUser, editUser } from "../controllers/user.controller.js";

const router = express.Router();

// router.post("/", createUser);
// router.patch("/:id", editUser);
// router.put("/:id", updateUser);

router.get("/me", authMiddleware, getMe);
router.put("/me", authMiddleware, updateMe);
router.delete("/me", authMiddleware, deleteMe);

export default router;
