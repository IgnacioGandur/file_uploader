import { Router } from "express";
import updateFileController from "../controllers/updateFileController.js";
import validateFilenameUpdate from "../validators/filename/validateFilenameUpdate.js";

const updateFileRouter = Router();

updateFileRouter.post(
    "/:fileId",
    validateFilenameUpdate,
    updateFileController.updateFilePost,
);

export default updateFileRouter;
