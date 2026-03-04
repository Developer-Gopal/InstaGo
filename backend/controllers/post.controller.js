import { uploadFile } from "../utils/cloudinaryUpload.js";
import prisma from "../config/db.js";
import fs from "fs";
import {
  createPostService,
  getUserPostService,
  getAllPost,
  getPostByIdService,
  deletePostByUserService,
} from "../services/post.services.js";

export const createPost = async (req, res) => {
  try {
    const post = await createPostService({
      userId: req.user.id,
      caption: req.body.caption,
      file: req.file,
    });
    res.status(201).json({ message: "post created" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

export const getUserPost = async (req, res) => {
  try {
    const posts = await getUserPostService(Number(req.params.id));
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const posts = await getPostByIdService(Number(req.params.id));
    if (!posts) {
      throw new Error("post not found");
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await deletePostByUserService({
      userId: req.user.id,
      postId: Number(req.params.postId),
    });
    res.json({ message: "post deleted" });
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
};

// export const createPost = async (req, res) => {
//   try {
//     const file = req.file;

//     if (!file) {
//       return res.status(400).json({ message: "media not provied yet !" });
//     }

//     const path = file.path;
//     const uploadData = await uploadFile("files", path);
//     const uploadedDataURL = uploadData.secure_url;
//     const data = await prisma.user.update({
//       where: { id: req.user.id },
//       data: { profilePic: uploadedDataURL },
//     });
//     //not to store locally
//     if (uploadedDataURL) {
//       fs.unlink(path, (err) => {
//         if (err) {
//           return err;
//         }
//       });
//     }
//     console.log(uploadFile);
//     return res.status(200).json({ message: "post uplaoded successfully" });
//   } catch (err) {
//     return res.status(500).json({ error: err });
//   }
// };
