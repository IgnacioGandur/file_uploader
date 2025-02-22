import { Router } from "express";
import upload from "../middleware/multer/multer.js";
import validateOriginalFilename from "../validators/filename/validateOriginalFilename.js";
import validateFilename from "../validators/filename/validateFilename.js";
import uploadFileController from "../controllers/uploadFileController.js";

const uploadFileRouter = Router();

uploadFileRouter.post(
    "/",
    upload.single("file"),
    validateOriginalFilename,
    validateFilename,
    uploadFileController.uploadFilePost,
);

export default uploadFileRouter;
