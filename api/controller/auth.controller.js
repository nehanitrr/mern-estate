import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const authController = async (req, res) => {
  const { username, email, password } = req.body;
  const encodedPwd = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: encodedPwd });
  try {
    await newUser.save();
    res.status(201).json("User create successfully!");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
