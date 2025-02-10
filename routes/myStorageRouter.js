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

myStorageRouter.post(
    "/update-file/:fileId",
    myStorageController.updateFilePost,
);

myStorageRouter.post(
    "/delete-file/:fileId",
    myStorageController.deleteFilePost,
);

myStorageRouter.post("/create-folder", myStorageController.createFolderPost);

myStorageRouter.get("/files/:fileName", myStorageController.fileDetailsGet);

myStorageRouter.get(
    "/folders/:folderName",
    myStorageController.folderDetailsGet,
);

myStorageRouter.post(
    "/update-folder/:folderName",
    myStorageController.updateFolderPost,
);
myStorageRouter.post(
    "/delete-folder/:folderName",
    myStorageController.deleteFolderPost,
);

export default myStorageRouter;
