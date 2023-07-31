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
  console.log("params", req.query.schedule_id);
  try {
    const response = await prisma.seat.findMany({
      where: {
        schedule_id: parseInt(req.query.schedule_id),
        is_booked: false,
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
        name: req.body.name,
        price: req.body.price,
        is_booked: false,
        schedule_id: req.body.schedule_id,
        classification_id: req.body.classification_id,
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
        id: parseInt(req.query.id),
      },
      data: {
        name: req.body.name,
        price: req.body.price,
        is_booked: false,
        schedule_id: req.body.schedule_id,
        classification_id: req.body.classification_id,
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
