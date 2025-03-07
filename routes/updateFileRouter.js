import { Router } from "express";
import updateFileController from "../controllers/updateFileController.js";
import validateFilenameUpdate from "../validators/file/filename/validateFilenameUpdate.js";

const updateFileRouter = Router();

updateFileRouter.post(
    "/:fileId",
    validateFilenameUpdate,
    updateFileController.updateFilePost,
);

export default updateFileRouter;
