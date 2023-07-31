import prisma from "../modules/db";

export const getClassifications = async (req, res) => {
  try {
    const response = await prisma.classification.findMany();
    console.log(response);
    res.json({
      data: response,
      message: "classfications fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const createClassifications = async (req, res) => {
  try {
    const response = await prisma.classification.create({
      data: {
        name: req.body.name,
      },
    });
    res.json({
      message: "classification created successfully",
      data: response,
    });
  } catch (error) {
    res.status = 400;
    res.json({ error });
  }
};

export const updateClassification = async (req, res) => {
  try {
    const response = await prisma.classification.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
      },
    });
    res.json({
      message: "classification updated successfully",
      data: response,
    });
  } catch (error) {
    res.status = 400;
    res.json({ error });
  }
};

export const deleteClassification = async (req, res) => {
  try {
    const response = await prisma.classification.delete({
      where: {
        id: req.body.id,
      },
    });
    res.json({
      message: "classification deleted successfully",
      data: response,
    });
  } catch (error) {
    res.status = 400;
    res.json({ error });
  }
};
