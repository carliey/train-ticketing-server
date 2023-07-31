import prisma from "../modules/db";

export const getAllSchedules = async (req, res) => {
  try {
    const response = await prisma.schedule.findMany();
    console.log(response);
    res.json({
      data: response,
      message: "schedules fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const getAvailableSchedules = async (req, res) => {
  try {
    const response = await prisma.schedule.findMany({
      where: {
        is_open: true,
      },
    });
    console.log(response);
    res.json({
      data: response,
      message: "schedules fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const getSchedulesByDate = async (req, res) => {
  try {
    const response = await prisma.schedule.findMany({
      where: {
        departure_date: req.query.departure_date,
      },
    });
    console.log(response);
    res.json({
      data: response,
      message: "schedules fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const createSchedule = async (req, res) => {
  try {
    console.log(req.body);
    const response = await prisma.schedule.create({
      data: {
        departure_date: req.body.departure_date,
        arrival_date: req.body.arrival_date || undefined,
        depature_time: req.body.depature_time,
        arrival_time: req.body.arrival_time,
        is_open: true,
        depature_station_id: req.body.depature_station_id,
        arrival_station_id: req.body.arrival_station_id,
      },
    });
    console.log(response);
    res.json({
      data: response,
      message: "schedules created successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const updateSchedule = async (req, res) => {
  try {
    const response = await prisma.schedule.update({
      where: {
        id: req.query.id,
      },
      data: {
        departure_date: req.body,
        arrival_date: req.body.arrival_date || undefined,
        depature_time: req.body.depature_time,
        arrival_time: req.body.arrival_time,
        is_open: true,
        depature_station_id: req.body.depature_station_id,
        arrival_station_id: req.body.arrival_station_id,
      },
    });
    console.log(response);
    res.json({
      data: response,
      message: "schedules updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const activateSchedule = async (req, res) => {
  try {
    const response = await prisma.schedule.update({
      where: {
        id: req.query.id,
      },
      data: {
        is_open: true,
      },
    });
    console.log(response);
    res.json({
      data: response,
      message: "schedules updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const deactivateSchedule = async (req, res) => {
  try {
    const response = await prisma.schedule.update({
      where: {
        id: req.query.id,
      },
      data: {
        is_open: false,
      },
    });
    console.log(response);
    res.json({
      data: response,
      message: "schedules updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const addSeatToSchedule = async (req, res) => {
  console.log("query", req.query.schedule_id);
  try {
    const response = await prisma.schedule.update({
      where: {
        id: req.query.schedule_id,
      },
      data: {
        seats: {
          connect: {
            id: req.body.seat_id,
          },
        },
      },
    });
    console.log(response);
    res.json({
      data: response,
      message: "seat added schedule successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const removeSeatFromSchedule = async (req, res) => {
  try {
    const response = await prisma.schedule.update({
      where: {
        id: req.query.id,
      },
      data: {
        seats: {
          disconnect: {
            id: req.body.seat_id,
          },
        },
      },
    });
    console.log(response);
    res.json({
      data: response,
      message: "seat added schedule successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export const deleteSchedule = async (req, res) => {
  try {
    const response = await prisma.schedule.delete({
      where: {
        id: req.query.id,
      },
    });
    console.log(response);
    res.json({
      data: response,
      message: "schedule deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};
