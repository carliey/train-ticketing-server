import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
import { protection } from "./modules/auth";
import { createUser, signin } from "./handlers/authHandler";

dotenv.config();

const app = express();
const port = 5051;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "I'm working" });
});

app.use("/api", protection, router);
app.post("/user/create", createUser);

app.post("/signin", signin);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
