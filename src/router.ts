import { Router } from "express";
import {
  changePassword,
  getProfile,
  getUsers,
  updateProfile,
} from "./handlers/userHandler";

const router = Router();

//-------user Routes
router.get("/users", getUsers);
router.get("/profile", getProfile);
router.put("/profile/update", updateProfile);
router.put("/profile/update-password", changePassword);

export default router;
