import express from "express";
import { primoController } from "./primo.controller.js";
const primoRouter = express.Router();

primoRouter.post("/", primoController.findAll);

export default primoRouter;
