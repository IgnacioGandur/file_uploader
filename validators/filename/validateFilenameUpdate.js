import { validationResult } from "express-validator";
import fileModel from "../../db/prisma/models/file.js";
import getFilenameValidationChain from "./getFilenameValidationChain.js";

const validationChain = getFilenameValidationChain("updatedFilename");

const validateFilenameUpdate = [
    validationChain
        .notEmpty()
        .withMessage("The updated filename can't be empty."),
    async (req, res, next) => {
        const { fileName } = req.params;
        const validationErrors = validationResult(req);
        const file = await fileModel.getFileByName(fileName);

        if (!validationErrors.isEmpty()) {
            return res.status(422).render("pages/file-details", {
                validationErrors: validationErrors.array(),
                file: file,
            });
        } else {
            return next();
        }
    },
];

export default validateFilenameUpdate;
