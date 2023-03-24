import prisma from "../modules/db";

export const getStations = async (req, res) => {
  try {
    const response = await prisma.station.findMany({
      include: {
        arrivals: true,
        depatures: true,
      },
    });
    console.log(response);
    res.json({ data: response, message: "stations fetched successfully" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const createStation = async (req, res) => {
  try {
    const response = await prisma.station.create({
      data: {
        name: req.body.name,
      },
    });
    res.json({ message: "station created successfully", data: response });
  } catch (error) {
    res.status = 400;
    res.json({ error });
  }
};

export const updateStation = async (req, res) => {
  try {
    const response = await prisma.station.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
      },
    });
    res.json({ message: "station updated successfully", data: response });
  } catch (error) {
    res.status = 400;
    res.json({ error });
  }
};
export const deleteStation = async (req, res) => {
  try {
    const response = await prisma.station.delete({
      where: {
        id: req.body.id,
      },
    });
    res.json({ message: "station deleted successfully", data: response });
  } catch (error) {
    res.status = 400;
    res.json({ error });
  }
};
