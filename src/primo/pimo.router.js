import express from "express";
import { primoController } from "./primo.controller.js";
const primoRouter = express.Router();

primoRouter.get("/:numero", primoController.findAll);

export default primoRouter;
