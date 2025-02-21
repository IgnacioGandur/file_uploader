import { check, validationResult } from "express-validator";
import validators from "validator";
import userFolderModel from "../../db/prisma/models/userFolder.js";
import validateFileSize from "./custom-validators/validateFileSize.js";
import checkIfOriginalFilenameIsAvailable from "./custom-validators/checkIfOriginalFilenameIsAvailable.js";

const { trim, isEmpty, isLength, matches } = validators;

const validationChain = [
    check("file")
        .custom((_, { req }) => {
            if (!req.body.filename) {
                const { originalname } = req.file;
                const filename = originalname.slice(
                    0,
                    originalname.lastIndexOf("."),
                );

                const regex = /^[\w\d_-]*$/;

                if (!isLength(filename, { min: 1, max: 30 })) {
                    throw new Error(
                        "The original name of the file you are trying to upload must be between 1 and 30 characters long.",
                    );
                }

                if (isEmpty(trim(filename))) {
                    throw new Error(
                        "The original name of the file you are trying to upload can't be empty.",
                    );
                }

                if (!matches(filename, regex)) {
                    throw new Error(
                        `The original name of the file you are trying to upload must only contain alphanumeric and hyphen values ("-","_"). `,
                    );
                }
            }
            return true;
        })
        .custom(validateFileSize)
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
