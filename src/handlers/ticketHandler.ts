import prisma from "../modules/db";

export const getAllTickets = async (req, res) => {
  try {
    const response = await prisma.ticket.findMany({
      include: {
        user: true,
        seat: { include: { schedule: true } },
      },
    });
    console.log(response);
    res.json({
      data: response,
      message: "tickets fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const getUserTickets = async (req, res) => {
  try {
    const response = await prisma.ticket.findMany({
      where: {
        id: req.user.id,
      },
      include: {
        user: true,
        seat: {
          include: {
            schedule: {
              include: {
                arrival_station: true,
                depature_station: true,
              },
            },
            classification: true,
          },
        },
      },
    });
    console.log(response);
    res.json({
      data: response,
      message: "tickets fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const createTicket = async (req, res) => {
  try {
    console.log({
      user_id: req.user.id,
      seat_id: req.body.seat_id,
      reference_id: req.body.reference_id,
      transaction_id: req.body.transaction_id,
    });
    const response = await prisma.ticket.create({
      data: {
        user_id: req.user.id,
        seat_id: req.body.seat_id,
        reference_id: req.body.reference_id,
        transaction_id: req.body.transaction_id,
      },
    });
    console.log(response);
    const updateSeat = await prisma.seat.update({
      where: {
        id: req.body.seat_id,
      },
      data: {
        is_booked: true,
      },
    });
    console.log("update seat", updateSeat);
    res.json({
      data: response,
      message: "ticket created successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};
