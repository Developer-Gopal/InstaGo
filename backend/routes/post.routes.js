import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  createPost,
  deletePost,
  getPostById,
  getUserPost,
} from "../controllers/post.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

// router.post("/upload", upload.single("file"), createPost); // public route
// router.post("/upload", authMiddleware, upload.single("file"), createPost); //private route

//create post (protected route)
router.post("/upload", authMiddleware, upload.single("media"), createPost);

//public routes
router.get("/:id", getPostById);
router.get("/user/:id", getUserPost);

//delete post (protected)
router.delete("/:id", authMiddleware, deletePost);

export default router;
