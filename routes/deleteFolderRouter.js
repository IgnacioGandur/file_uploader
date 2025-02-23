import { Router } from "express";
import deleteFolderController from "../controllers/deleteFolderController.js";

const deleteFolderRouter = Router();

deleteFolderRouter.post(
    "/:folderName",
    deleteFolderController.deleteFolderPost,
);

export default deleteFolderRouter;
