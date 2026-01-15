import prisma from "../prisma/client.js";

export const getMe = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "unauthorized" });
  }
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    select: {
      id: true,
      username: true,
      email: true,
      bio: true,
      profilePic: true,
      createdAt: true,
    },
  });
  res.status(200).json(user);
};

export const updateMe = async (req, res) => {
  const { bio, profilePic, isPrivate } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: { bio, profilePic, isPrivate },
    });
    res.status(200).json({ message: "information updated successfully " });
  } catch (err) {
    res.status(500).json({ message: "something went wrong", err });
  }
};

export const deleteMe = async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: req.user.id,
      },
    });

    return res.status(200).json({ message: "user deleted" });
  } catch (err) {
    return res
      .status(401)
      .json({ message: "error during user delettion", err });
  }
};

// export const createUser = async (req, res) => {
//   try {
//     const { username, email, passwordHash, profilePic, bio, isPrivate } =
//       req.body;

//     const user = await prisma.user.create({
//       data: {
//         username: username,
//         email: email,
//         passwordHash: passwordHash,
//         profilePic: profilePic,
//         bio: bio,
//         isPrivate: isPrivate,
//       },
//     });

//     res.status(201).json(user);
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };

// //Partial Update
// export const editUser = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const data = {}; //Dynamic data creation from postman
//     if (username !== undefined) data.username = username;
//     if (email !== undefined) data.email = email;
//     if (passwordHash !== undefined) data.passwordHash = passwordHash;
//     if (profilePic !== undefined) data.passwordHash = passwordHash;
//     if (bio !== undefined) data.bio = bio;
//     if (isPrivate !== undefined) data.isPrivate = isPrivate;

//     if (Object.keys(data).length == 0) {
//       res
//         .status(400)
//         .json({ error: "No fields are provided to update user details" });
//     }

//     const user = await prisma.user.update({
//       where: {
//         id: Number(id),
//       },
//       data,
//     });
//     res.status(201).json(user);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// //User Updation
// export const updateUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { username, email, passwordHash, profilePic, bio, isPrivate } =
//       req.body;

//     const user = await prisma.user.update({
//       where: {
//         id: Number(id),
//       },
//       data: {
//         username: username,
//         email: email,
//         passwordHash: passwordHash,
//         profilePic: profilePic,
//         bio: bio,
//         isPrivate: isPrivate,
//       },
//     });
//     res.status(201).json(user);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
