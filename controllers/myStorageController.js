import folderModel from "../db/prisma/models/folder.js";
import fsCreateFolder from "../utilities/fs/createFolder.js";
import userFolderModel from "../db/prisma/models/userFolder.js";
import fileModel from "../db/prisma/models/file.js";
import fsUpdateFileName from "../utilities/fs/updateFileName.js";
import fsDeleteFile from "../utilities/fs/deleteFile.js";
import fsUpdateFolderName from "../utilities/fs/updateFolderName.js";
import fsDeleteFolder from "../utilities/fs/deleteFolder.js";

const myStorageController = {
    myStorageGet: async (req, res) => {
        const { username } = req.user;
        const userFolder = await userFolderModel.getUserFolder(username);
        res.render("pages/my-storage", {
            userFolder: userFolder,
            files: userFolder.files,
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

    updateFolderPost: async (req, res) => {
        const { username } = req.user;
        const { folderName } = req.params;
        const { updatedFolderName } = req.body;

        fsUpdateFolderName(username, folderName, updatedFolderName);
        await folderModel.updateFolderName(
            folderName,
            username,
            updatedFolderName,
        );
        res.redirect("/my-storage");
    },

    fileDetailsGet: async (req, res) => {
        const { fileName } = req.params;
        const file = await fileModel.getFileByName(fileName);
        res.render("pages/file-details.ejs", {
            file: file,
        });
    },

    folderDetailsGet: async (req, res) => {
        const { folderName } = req.params;
        const { username } = req.user;
        const folder = await folderModel.getFolderByName(username, folderName);
        res.render("pages/folder-details.ejs", {
            folder: folder,
            files: folder.files,
        });
    },

    deleteFolderPost: async (req, res) => {
        const { folderName } = req.params;
        const { username } = req.user;
        fsDeleteFolder(username, folderName);

        await folderModel.deleteFolder(username, folderName);

        res.redirect("/my-storage");
    },
};
export default myStorageController;
