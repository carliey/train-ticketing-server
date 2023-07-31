import { Router } from "express";
import {
  changePassword,
  getProfile,
  getUsers,
  updateProfile,
} from "./handlers/userHandler";
import {
  createClassifications,
  getClassifications,
} from "./handlers/classificationHandler";
import { createStation, getStations } from "./handlers/stationHandler";
import { createSeat, getScheduleSeats, getSeats } from "./handlers/seatHandler";
import {
  addSeatToSchedule,
  createSchedule,
  getAllSchedules,
  getAvailableSchedules,
  getSchedulesByDate,
} from "./handlers/scheduleHandler";
import { createTicket, getUserTickets } from "./handlers/ticketHandler";

const router = Router();

//-------user Routes
router.get("/users", getUsers);
router.get("/profile", getProfile);
router.put("/profile/update", updateProfile);
router.put("/profile/update-password", changePassword);

//----admin routes
router.get("/classifications", getClassifications);
router.post("/classification/create", createClassifications);

router.get("/stations", getStations);
router.post("/stations/create", createStation);

router.get("/schedules", getAllSchedules);
router.get("/schedules/available", getAvailableSchedules);
router.get("/schedules/date", getSchedulesByDate);
router.post("/schedules/create", createSchedule);
router.put("/schedules/add-seat", addSeatToSchedule);

router.get("/seats", getSeats);
router.get("/seats/schedule", getScheduleSeats);
router.post("/seats/create", createSeat);

router.get("/tickets/mine", getUserTickets);
router.post("/tickets/create", createTicket);

export default router;
