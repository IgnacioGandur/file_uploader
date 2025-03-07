import { validationResult } from "express-validator";
import userFolderModel from "../../db/prisma/models/userFolder.js";
import filenameValidationChain from "./filename/validateFilename.js";
import originalFilenameValidationChain from "./filename/validateOriginalFilename.js";
import folderValidationChain from "./folder/validateFolderWhenUploadingFile.js";
import formatBytes from "../../utilities/formatBytes.js";
import formatDate from "../../utilities/formatDate.js";

const fileValidationChain = [
    originalFilenameValidationChain,
    filenameValidationChain,
    folderValidationChain,
];

const validateFileUpload = [
    fileValidationChain,
    async (req, res, next) => {
        const validationErrors = validationResult(req);
        const { username } = req.user;
        const userFolder = await userFolderModel.getUserFolder(username);

        userFolder.files.forEach((file) => {
            file.uploadedAt = formatDate(file.uploadedAt);
            file.updatedAt = formatDate(file.updatedAt);
            file.size = formatBytes(file.size);
        });

        userFolder.folders.forEach((folder) => {
            folder.createdAt = formatDate(folder.createdAt);
            folder.updatedAt = formatDate(folder.updatedAt);
        });

        if (!validationErrors.isEmpty()) {
            const { filename, folder } = req.body;
            return res.status(422).render("pages/my-storage", {
                validationErrors: validationErrors.array(),
                userFolder: userFolder,
                files: userFolder.files,
                userInputs: {
                    filename: filename,
                    folder: folder,
                },
            });
        }

        return next();
    },
];

export default validateFileUpload;
