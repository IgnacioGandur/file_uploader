import { check } from "express-validator";
import validateFileSize from "./custom-validators/validateFileSize.js";
import checkIfOriginalFilenameIsAvailable from "./custom-validators/checkIfOriginalFilenameIsAvailable.js";
import validateOriginalFilenameConstraints from "./custom-validators/validateOriginalFilenameConstraints.js";
import checkIfUserSelectedFile from "../checkIfUserSelectedFile.js";

const originalFilenameValidationChain = check("file")
    .custom(checkIfUserSelectedFile)
    .bail()
    .custom(validateFileSize)
    .bail()
    .custom(validateOriginalFilenameConstraints)
    .bail()
    .custom(checkIfOriginalFilenameIsAvailable);

export default originalFilenameValidationChain;
