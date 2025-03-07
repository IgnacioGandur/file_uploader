import getFilenameValidationChain from "./getFilenameValidationChain.js";
import validateFileSize from "./custom-validators/validateFileSize.js";
import checkIfUserSelectedFile from "../checkIfUserSelectedFile.js";

const validationChain = getFilenameValidationChain("filename", true);

const filenameValidationChain = validationChain
    .custom(checkIfUserSelectedFile)
    .bail()
    .custom(validateFileSize);

export default filenameValidationChain;
