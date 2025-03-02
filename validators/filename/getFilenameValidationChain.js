import { body } from "express-validator";
import checkIfFilenameIsAvailable from "./custom-validators/checkIfFilenameIsAvailable.js";
import checkIfUserSelectedFile from "../checkIfUserSelectedFile.js";

function getFilenameValidationChain(fieldName, optional = false) {
    const regex = /^[\w\d_-]*$/;

    const validationChain = body(fieldName)
        .custom(checkIfUserSelectedFile)
        .bail()
        .trim()
        .escape()
        .isLength({ min: 1, max: 30 })
        .withMessage(
            `The filename length must be between 1 and 30 characters long.`,
        )
        .matches(regex)
        .withMessage(
            'Filename must only contain letters, numbers and hyphens ("-", "_").',
        )
        .bail()
        .custom(checkIfFilenameIsAvailable);

    return optional
        ? validationChain.optional({ values: "falsy" })
        : validationChain;
}

export default getFilenameValidationChain;
