import { exclude } from "../helpers/exclude";
import { comparePasswords, hashPassword } from "../modules/auth";
import prisma from "../modules/db";

export const getUsers = async (req, res) => {
  try {
    const response = await prisma.user.findMany();
    console.log(response);
    res.json({ data: response, message: "users fetched successfully" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const getProfile = async (req, res) => {
  try {
    const response = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
    });
    const userWithoutPassword = exclude(response, ["password"]);
    console.log(response);
    res.json({
      data: userWithoutPassword,
      message: "profile fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const response = await prisma.user.update({
      where: {
        id: req.user.id,
      },
      data: {
        name: req.body.name,
      },
    });
    console.log(response);
    res.json({ message: "Profile updated successfully" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const changePassword = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
    });

    const isValid = await comparePasswords(
      req.body.old_password,
      user.password
    );

    if (!isValid) {
      res.status(401);
      res.json({ message: "Old password incorrect" });
      return;
    }

    const response = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: await hashPassword(req.body.new_password),
      },
    });
    console.log(response);
    res.json({ message: "password changed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};
