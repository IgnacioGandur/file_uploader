import { validationResult } from "express-validator";
import userFolderModel from "../../db/prisma/models/userFolder.js";
// TODO: import the filename validation chain.
// TODO: import the original filename validation chain.
// TODO: import the folder validation chain.

const fileValidationChain = [];

async function validateFileUpload(req, res, next) {
    const validationErrors = validationResult(req);
    const { username } = req.user;
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
    }

    return next();
}

export default validateFileUpload;
