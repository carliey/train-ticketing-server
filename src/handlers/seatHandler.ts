import prisma from "../modules/db";

export const getSeats = async (req, res) => {
  try {
    const response = await prisma.seat.findMany();
    console.log(response);
    res.json({
      data: response,
      message: "seats fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const getScheduleSeats = async (req, res) => {
  try {
    const response = await prisma.seat.findMany({
      where: {
        schedule_id: req.params.id,
      },
      include: {
        classification: true,
      },
    });
    console.log(response);
    res.json({
      data: response,
      message: "seats fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const createSeat = async (req, res) => {
  try {
    const response = await prisma.seat.create({
      data: {
        name: req.params.name,
        price: req.params.price,
        is_booked: false,
        schedule_id: req.params.schedule_id,
        classification_id: req.params.classification_id,
      },
    });
    console.log(response);
    res.json({
      data: response,
      message: "seats created successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const updateSeat = async (req, res) => {
  try {
    const response = await prisma.seat.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.params.name,
        price: req.params.price,
        is_booked: false,
        schedule_id: req.params.schedule_id,
        classification_id: req.params.classification_id,
      },
    });
    console.log(response);
    res.json({
      data: response,
      message: "seats updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};
