import prisma from "../config/db.js";
import { hashPassword, comparePassword } from "../utils/password.js";
import { generateToken } from "../utils/jwt.js";

export const register = async (req, res) => {
  const { email, username, password } = req.body;
  //   console.log("password from req.body:", password);
  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email: email }, { username }], //{username} = {username:username}
      },
    }); //if true, then existing = obj value

    if (existingUser) {
      res.status(400).json({ message: "user already exists" });
    }

    const passwordHash = await hashPassword(password);

    const user = await prisma.user.create({
      data: { email: email, username: username, passwordHash: passwordHash },
    });

    res.status(201).json({ message: "user created" });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
    console.log(err);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      res.status(404).json({ message: "user not found" });
    }
    const isValid = await comparePassword(password, user.passwordHash);

    if (!isValid) {
      res.status(401).json({ message: "invalid credentials" });
    }

    const token = generateToken({ id: user.id });
    res.status(200).json({ message: "login successfully", token });
  } catch (err) {
    res.status(201).json({ message: "internal server issue", err });
  }
};

