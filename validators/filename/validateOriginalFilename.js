import { check, validationResult } from "express-validator";
import userFolderModel from "../../db/prisma/models/userFolder.js";
import validateFileSize from "./custom-validators/validateFileSize.js";
import checkIfOriginalFilenameIsAvailable from "./custom-validators/checkIfOriginalFilenameIsAvailable.js";
import validateOriginalFilenameConstraints from "./custom-validators/validateOriginalFilenameConstraints.js";
import checkIfUserSelectedFile from "../checkIfUserSelectedFile.js";
import validateFolderWhenuploadingFile from "../file/folder/validateFolderWhenUploadingFile.js";

const validationChain = [
    check("file")
        .custom(checkIfUserSelectedFile)
        .bail()
        .custom(validateOriginalFilenameConstraints)
        .bail()
        .custom(validateFileSize)
        .bail()
        .custom(checkIfOriginalFilenameIsAvailable),
    validateFolderWhenuploadingFile,
];

const validateOriginalFilename = [
    validationChain,
    async (req, res, next) => {
        const validationErrors = validationResult(req);
        const { username } = req.user;
        const userFolder = await userFolderModel.getUserFolder(username);

        if (!validationErrors.isEmpty()) {
            const { filename, folder, file } = req.body;
            return res.status(422).render("pages/my-storage", {
                validationErrors: validationErrors.array(),
                userFolder: userFolder,
                files: userFolder.files,
                userInputs: {
                    filename: filename,
                    folder: folder,
                    file: file,
                },
            });
        } else {
            return next();
        }
    },
];

export default validateOriginalFilename;
