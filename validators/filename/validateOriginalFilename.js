import { check, validationResult } from "express-validator";
import userFolderModel from "../../db/prisma/models/userFolder.js";
import validateFileSize from "./custom-validators/validateFileSize.js";
import checkIfOriginalFilenameIsAvailable from "./custom-validators/checkIfOriginalFilenameIsAvailable.js";
import validateOriginalFilenameConstraints from "./custom-validators/validateOriginalFilenameConstraints.js";
import checkIfUserSelectedFile from "../checkIfUserSelectedFile.js";

const validationChain = [
    check("file")
        .custom(checkIfUserSelectedFile)
        .bail()
        .custom(validateOriginalFilenameConstraints)
        .bail()
        .custom(validateFileSize)
        .bail()
        .custom(checkIfOriginalFilenameIsAvailable),
];

const validateOriginalFilename = [
    validationChain,
    async (req, res, next) => {
        const validationErrors = validationResult(req);
        const { username } = req.user;
        const userFolder = await userFolderModel.getUserFolder(username);

        if (!validationErrors.isEmpty()) {
            return res.status(422).render("pages/my-storage", {
                validationErrors: validationErrors.array(),
                userFolder: userFolder,
                files: userFolder.files,
            });
        } else {
            return next();
        }
    },
];

export default validateOriginalFilename;
