import { Router } from "express";
import myStorageController from "../controllers/myStorageController.js";

// Routers
import uploadFileRouter from "./uploadFileRouter.js";
import updateFileRouter from "./updateFileRouter.js";
import deleteFileRouter from "./deleteFileRouter.js";
import createFolderRouter from "./createFolderRouter.js";
import fileDetailsRouter from "./fileDetailsRouter.js";
import folderDetailsRouter from "./folderDetailsRouter.js";
import updateFolderRouter from "./updateFolderRouter.js";
import deleteFolderRouter from "./deleteFolderRouter.js";

const myStorageRouter = Router();

myStorageRouter.get("/", myStorageController.myStorageGet);
myStorageRouter.use("/upload-file", uploadFileRouter);
myStorageRouter.use("/update-file/", updateFileRouter);
myStorageRouter.use("/delete-file", deleteFileRouter);
myStorageRouter.use("/create-folder", createFolderRouter);
myStorageRouter.use("/files", fileDetailsRouter);
myStorageRouter.use("/folders", folderDetailsRouter);
myStorageRouter.use("/update-folder", updateFolderRouter);
myStorageRouter.use("/delete-folder", deleteFolderRouter);

export default myStorageRouter;
