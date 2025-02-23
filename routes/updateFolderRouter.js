import { Router } from "express";
import updateFolderController from "../controllers/updateFolderController.js";

const updateFolderRouter = Router();

updateFolderRouter.post(
    "/:folderName",
    updateFolderController.updateFolderPost,
);

export default updateFolderRouter;
