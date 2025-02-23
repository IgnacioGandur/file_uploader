import { Router } from "express";
import folderDetailsController from "../controllers/folderDetailsController.js";

const folderDetailsRouter = Router();

folderDetailsRouter.get(
    "/:folderName",
    folderDetailsController.folderDetailsGet,
);

export default folderDetailsRouter;
