import { Router } from "express";
import myStorageController from "../controllers/myStorageController.js";
import upload from "../middleware/multer/multer.js";

// Validators
import validateFilename from "../validators/filename/validateFilename.js";
import validateFilenameUpdate from "../validators/filename/validateFilenameUpdate.js";
import validateFolderName from "../validators/folder/validateFolder.js";
import validateFolderNameUpdate from "../validators/folder/validateFolderNameUpdate.js";
import validateOriginalFilename from "../validators/filename/validateOriginalFilename.js";

// TODO: refactor this router so every route gets handled in their own file.

const myStorageRouter = Router();

myStorageRouter.get("/", myStorageController.myStorageGet);

myStorageRouter.post(
    "/upload-file",
    upload.single("file"),
    validateOriginalFilename,
    validateFilename,
    myStorageController.uploadFilePost,
);

myStorageRouter.post(
    "/update-file/:fileId",
    validateFilenameUpdate,
    myStorageController.updateFilePost,
);

myStorageRouter.post(
    "/delete-file/:fileId",
    myStorageController.deleteFilePost,
);

myStorageRouter.post(
    "/create-folder",
    validateFolderName,
    myStorageController.createFolderPost,
);

myStorageRouter.get("/files/:fileName", myStorageController.fileDetailsGet);

myStorageRouter.get(
    "/folders/:folderName",
    myStorageController.folderDetailsGet,
);

myStorageRouter.post(
    "/update-folder/:folderName",
    validateFolderNameUpdate,
    myStorageController.updateFolderPost,
);
myStorageRouter.post(
    "/delete-folder/:folderName",
    myStorageController.deleteFolderPost,
);

export default myStorageRouter;
