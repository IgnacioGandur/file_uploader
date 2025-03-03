import { validationResult } from "express-validator";
import fileModel from "../../db/prisma/models/file.js";
import getFilenameValidationChain from "./getFilenameValidationChain.js";
import formatBytes from "../../utilities/formatBytes.js";
import formatDate from "../../utilities/formatDate.js";

const validationChain = getFilenameValidationChain("updatedFilename");

const validateFilenameUpdate = [
    validationChain
        .notEmpty()
        .withMessage("The updated filename can't be empty."),
    async (req, res, next) => {
        const { fileName } = req.params;
        const validationErrors = validationResult(req);
        const file = await fileModel.getFileByName(fileName);

        file.uploadedAt = formatDate(file.uploadedAt);
        file.updatedAt = formatDate(file.updatedAt);
        file.size = formatBytes(file.size);

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
