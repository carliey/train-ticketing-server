import prisma from "../modules/db";

export const getAllTickets = async (req, res) => {
  try {
    const response = await prisma.ticket.findMany({
      include: {
        user: true,
        seat: true,
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
        id: req.params.id,
      },
      include: {
        user: true,
        seat: true,
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
    const response = await prisma.ticket.create({
      data: {
        user_id: req.body.user_id,
        seat_id: req.body.seat_id,
        reference_id: req.body.reference_id,
        transaction_id: req.body.transaction_id,
      },
    });
    console.log(response);
    res.json({
      data: response,
      message: "ticket created successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};
