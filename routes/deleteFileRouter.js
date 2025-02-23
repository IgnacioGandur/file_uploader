import { Router } from "express";
import deleteFileController from "../controllers/deleteFileController.js";

const deleteFileRouter = Router();

deleteFileRouter.post("/:fileId", deleteFileController.deleteFilePost);

export default deleteFileRouter;
