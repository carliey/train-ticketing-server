import prisma from "../modules/db";

export const getProfile = async (req, res) => {
  try {
    const response = await prisma.user.findUnique({
      where: {
        id: req.body.id,
      },
    });
    console.log(response);
    res.json({ data: response, message: "profile fetched successfully" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const response = await prisma.user.update({
      where: {
        id: req.body.id,
      },
      data: {
        name: req.body.name,
      },
    });
    console.log(response);
    res.json({ data: response, message: "Profile updated successfully" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const changePassword = async (req, res) => {
  try {
    const response = await prisma.user.update({
      where: {
        id: req.body.id,
      },
      data: {
        password: req.body.password,
      },
    });
    console.log(response);
    res.json({ data: response, message: "password changed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};
