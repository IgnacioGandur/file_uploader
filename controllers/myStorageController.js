import folderModel from "../db/prisma/models/folder.js";
import fsCreateFolder from "../utilities/fs/createFolder.js";
import userFolderModel from "../db/prisma/models/userFolder.js";
import fileModel from "../db/prisma/models/file.js";
import fsUpdateFileName from "../utilities/fs/updateFileName.js";
import fsDeleteFile from "../utilities/fs/deleteFile.js";

const myStorageController = {
    myStorageGet: async (req, res) => {
        const { username } = req.user;
        const userFolder = await userFolderModel.getUserFolder(username);
        res.render("pages/my-storage", {
            userFolder: userFolder,
        });
    },

    uploadFilePost: async (req, res) => {
        const { mimetype, size, destination, path } = req.file;
        const { username } = req.user;
        const { folder, fileExtension, filename } = req.body;
        await fileModel.createFile(
            filename,
            fileExtension,
            mimetype,
            size,
            username,
            folder,
            destination,
            path,
        );

        res.redirect("/my-storage");
    },

    createFolderPost: async (req, res) => {
        const { folderName } = req.body;
        const { username } = req.user;
        await folderModel.createFolder(username, folderName);
        fsCreateFolder(username, folderName);
        res.redirect("/my-storage");
    },

    updateFilePost: async (req, res) => {
        const { fileId } = req.params;
        const { username } = req.user;
        const { updatedFilename } = req.body;
        const { destination, path, fileExtension } =
            await fileModel.getFileById(fileId);

        fsUpdateFileName(path, destination, updatedFilename, fileExtension);

        await fileModel.updateFileName(fileId, username, updatedFilename);

        res.redirect("/my-storage");
    },

    deleteFilePost: async (req, res) => {
        const { fileId } = req.params;
        const { username } = req.user;
        const { path } = await fileModel.getFileById(fileId);

        fsDeleteFile(path);

        await fileModel.deleteFile(fileId, username);

        res.redirect("/my-storage");
    },
};
export default myStorageController;
