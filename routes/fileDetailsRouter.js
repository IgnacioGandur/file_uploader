import { Router } from "express";
import fileDetailsController from "../controllers/fileDetailsController.js";

const fileDetailsRouter = Router();

fileDetailsRouter.get("/:fileName", fileDetailsController.fileDetailsGet);

export default fileDetailsRouter;
