import { Router } from "express";
import upload from "../middleware/multer/multer.js";
// import validateOriginalFilename from "../validators/file/filename/validateOriginalFilename.js";
// import validateFilename from "../validators/file/filename/validateFilename.js";
import uploadFileController from "../controllers/uploadFileController.js";
import validateFileUpload from "../validators/file/validateFileUpload.js";

const uploadFileRouter = Router();

uploadFileRouter.post(
    "/",
    upload.single("file"),
    // validateOriginalFilename,
    // validateFilename,
    validateFileUpload,
    uploadFileController.uploadFilePost,
);

export default uploadFileRouter;
