import { Router } from "express";
import validateFolderName from "../validators/folder/validateFolderName.js";
import createFolderController from "../controllers/createFolderController.js";

const createFolderRouter = Router();

createFolderRouter.post(
    "/",
    validateFolderName,
    createFolderController.createFolderPost,
);

export default createFolderRouter;
