import { body } from "express-validator";
import folderModel from "../../db/prisma/models/folder.js";

async function checkIfFolderNameIsAvailable(folderName, { req }) {
    const { username } = req.user;
    const isAvailable = await folderModel.checkIfFolderNameIsAvailable(
        username,
        folderName,
    );

    if (!isAvailable) {
        throw new Error(
            `You already have a folder called "${folderName}". Please use another name. `,
        );
    } else {
        return true;
    }
}

function getFolderNameValidationChain(folderNameField) {
    const regex = /^[\w\d_-]*$/;

    return body(folderNameField)
        .trim()
        .notEmpty()
        .withMessage("The folder name can't be empty.")
        .isLength({ min: 1, max: 30 })
        .withMessage(
            "The folder name must be between 1 and 30 characters long.",
        )
        .bail()
        .matches(regex)
        .withMessage(
            "The folder name can only contain alphanumeric and hyphen characters.",
        )
        .bail()
        .custom(checkIfFolderNameIsAvailable);
}

export default getFolderNameValidationChain;
