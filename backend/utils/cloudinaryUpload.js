import cloudinary from "../config/cloudinary.js";

export const uploadFile = async (folder, filePath) => {
  try {
    return await cloudinary.uploader.upload(filePath, { folder });
  } catch (err) {
    return { err };
  }
};
