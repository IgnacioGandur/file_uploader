import getFilenameValidationChain from "./getFilenameValidationChain.js";
import { validationResult } from "express-validator";
import userFolderModel from "../../db/prisma/models/userFolder.js";
import validateFileSize from "./custom-validators/validateFileSize.js";
import checkIfUserSelectedFile from "../checkIfUserSelectedFile.js";

const validationChain = getFilenameValidationChain("filename", true);

const validateFilename = [
    validationChain
        .custom(checkIfUserSelectedFile)
        .bail()
        .custom(validateFileSize),
    async (req, res, next) => {
        const { username } = req.user;
        const validationErrors = validationResult(req);
        const userFolder = await userFolderModel.getUserFolder(username);

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
        } else {
            return next();
        }
    },
];

export default validateFilename;
