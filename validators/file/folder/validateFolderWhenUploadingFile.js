import { body } from "express-validator";
import checkIfFolderExists from "./custom-validator/checkIfFolderExists.js";

const folderValidationChain = body("folder")
    .optional({ values: "falsy" })
    .trim()
    .isInt()
    .withMessage("The folder id must be an integer.")
    .bail()
    .custom(checkIfFolderExists);

export default folderValidationChain;
