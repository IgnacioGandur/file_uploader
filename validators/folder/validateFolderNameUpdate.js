import { validationResult } from "express-validator";
import getFolderNameValidationChain from "./getFolderNameValidationChain.js";
import folderModel from "../../db/prisma/models/folder.js";

const validationChain = getFolderNameValidationChain("updatedFolderName");

const validateFolderNameUpdate = [
    validationChain,
    async (req, res, next) => {
        const validationErrors = validationResult(req);
        const { folderName } = req.params;
        const { username } = req.user;
        const folder = await folderModel.getFolderByName(username, folderName);

        if (!validationErrors.isEmpty()) {
            return res.status(422).render("pages/folder-details", {
                validationErrors: validationErrors.array(),
                folder: folder,
                files: folder.files,
            });
        }
    },
];

export default validateFolderNameUpdate;
