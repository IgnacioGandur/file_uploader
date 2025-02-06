import { Router } from "express";
import myStorageController from "../controllers/myStorageController.js";
import upload from "../middleware/multer/multer.js";

const myStorageRouter = Router();

myStorageRouter.get("/", myStorageController.myStorageGet);

myStorageRouter.post(
    "/upload-file",
    upload.single("file"),
    myStorageController.uploadFilePost,
);

myStorageRouter.post("/create-folder", myStorageController.createFolderPost);

myStorageRouter.post(
    "/update-file/:fileId",
    myStorageController.updateFilePost,
);

myStorageRouter.post(
    "/delete-file/:fileId",
    myStorageController.deleteFilePost,
);

export default myStorageRouter;
