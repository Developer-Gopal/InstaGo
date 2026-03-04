import { uploadFile } from "../utils/cloudinaryUpload.js";
import prisma from "../config/db.js";
import fs from "fs";

export const createPostService = async ({ userId, caption, file }) => {
  if (!file) {
    throw new Error("file is required");
  }

  //Media type check
  const isVideo = file.mimetype;
  const mediaType = isVideo == "video/mp4" ? "VIDEO" : "IMAGE";
  const uploadResult = await uploadFile("files", file.path);

  const post = await prisma.post.create({
    data: { userId, caption, mediaUrl: uploadResult.secure_url, mediaType },
  });

  if (uploadResult.secure_url) {
    fs.unlink(file.path, (err) => {
      return err;
    });
  }
  return post;
};

//User all posts ( protected)
export const getUserPostService = async (userId) => {
  const postResult = await prisma.post.findMany({
    where: { userId: userId },
    orderBy: { createdAt: "desc" },
  });
  return postResult;
};

//get specific post
export const getPostByIdService = async (postId) => {
  const postResult = await prisma.post.findUnique({
    where: { id: postId },
  });
  return postResult;
};

export const getAllPost = async (req, res) => {
  const postResult = await prisma.post.findMany();
  return postResult;
};

export const deletePostByUserService = async (userId, postId) => {
  const deletePost = await prisma.post.findUnique({
    where: { id: postId },
  });

  if (!post) {
    throw new Error("Post not found");
  }
  if (post.userId != +userId) {
    throw new Error("You are not allowed to delete this post");
  }

  await prisma.post.delete({ where: { id: postId } });
  return true;
};
