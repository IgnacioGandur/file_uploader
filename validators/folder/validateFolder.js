import { validationResult } from "express-validator";
import userFolderModel from "../../db/prisma/models/userFolder.js";
import getFolderNameValidationChain from "./getFolderNameValidationChain.js";

const validationChain = getFolderNameValidationChain("folderName");

const validateFolderName = [
    validationChain,
    async (req, res, next) => {
        const { username } = req.user;
        const userFolder = await userFolderModel.getUserFolder(username);
        const validationErrors = validationResult(req);

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

export default validateFolderName;
