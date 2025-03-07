import folderModel from "../../../../db/prisma/models/folder.js";

async function checkIfFolderExists(folderId, { req }) {
    const { username } = req.user;

    const folderExists = await folderModel.checkIfFolderExistsById(
        username,
        folderId,
    );

    if (!folderExists) {
        throw new Error(
            `The folder in which you are trying to upload the file doesn't exists or doesn't belong to you.`,
        );
    }
}

export default checkIfFolderExists;
