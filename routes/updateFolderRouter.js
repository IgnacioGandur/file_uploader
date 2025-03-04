import { Router } from "express";
import updateFolderController from "../controllers/updateFolderController.js";
import validateFolderNameUpdate from "../validators/folder/validateFolderNameUpdate.js";

const updateFolderRouter = Router();

updateFolderRouter.post(
    "/:folderName",
    validateFolderNameUpdate,
    updateFolderController.updateFolderPost,
);

export default updateFolderRouter;
