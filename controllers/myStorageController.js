import folderModel from "../db/prisma/models/folder.js";
// import fsCreateFolder from "../utilities/fs/createFolder.js";
import userFolderModel from "../db/prisma/models/userFolder.js";
import fileModel from "../db/prisma/models/file.js";
// import fsUpdateFileName from "../utilities/fs/updateFileName.js";
// import fsDeleteFile from "../utilities/fs/deleteFile.js";
// import fsUpdateFolderName from "../utilities/fs/updateFolderName.js";
import fsDeleteFolder from "../utilities/fs/deleteFolder.js";
import cloudinaryInteractions from "../cloudinary/cloudinaryInteractions.js";
import path from "path";

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
        const { username } = req.user;
        const { originalname, mimetype, size, buffer } = req.file;
        const { filename, folder } = req.body;
        const fileExtension = path.extname(originalname);
        const finalFilename = !filename ? originalname.split(".")[0] : filename;
        // let folderName = undefined;

        // if (folder) {
        //     folderName = await folderModel.getFolderNameById(folder);
        // }

        const public_id = `${Date.now()}/${finalFilename}${fileExtension}`;
        // const cloudinaryFolder = path.join(
        //     username,
        //     folderName ? folderName.name : "",
        // );

        const uploadResult = await cloudinaryInteractions.uploadFile(
            buffer, // File buffer.
            public_id, // File name in cloudinary.
            username, // Folder to store the file into.
        );

        await fileModel.createFile(
            finalFilename,
            fileExtension,
            mimetype,
            size,
            username,
            folder,
            uploadResult.secure_url,
            uploadResult.public_id,
        );

        res.redirect("/my-storage");
    },

    createFolderPost: async (req, res) => {
        const { folderName } = req.body;
        const { username } = req.user;
        // const cloudinaryResult = await cloudinaryInteractions.createFolder(
        //     username,
        //     folderName,
        // );

        await folderModel.createFolder(
            username,
            folderName,
            // cloudinaryResult.path,
        );

        res.redirect("/my-storage");
    },

    updateFilePost: async (req, res) => {
        const { fileId } = req.params;
        const { username } = req.user;
        const { updatedFilename } = req.body;
        const { name, cloudinary_public_id } =
            await fileModel.getFileById(fileId);

        const new_public_id = cloudinary_public_id.replace(
            name,
            updatedFilename,
        );

        const fileDetailsCloudinary =
            await cloudinaryInteractions.updateFilename(
                cloudinary_public_id,
                new_public_id,
            );

        await fileModel.updateFile(
            fileId,
            username,
            updatedFilename,
            fileDetailsCloudinary.public_id,
            fileDetailsCloudinary.secure_url,
        );

        res.redirect("/my-storage");
    },

    deleteFilePost: async (req, res) => {
        const { fileId } = req.params;
        const { username } = req.user;
        const file = await fileModel.getFileById(fileId);

        await cloudinaryInteractions.deleteFile(file.cloudinary_public_id);

        await fileModel.deleteFile(fileId, username);

        res.redirect("/my-storage");
    },

    updateFolderPost: async (req, res) => {
        const { username } = req.user;
        const { folderName } = req.params;
        const { updatedFolderName } = req.body;

        // fsUpdateFolderName(username, folderName, updatedFolderName);
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
        // file.path = file.path.split("public")[1];
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
        // fsDeleteFolder(username, folderName);

        const folder = await folderModel.getFolderByName(username, folderName);

        const public_ids_array = [];

        for (let i = 0; i < folder.files.length; i++) {
            public_ids_array.push(folder.files[i].cloudinary_public_id);
        }

        console.log("array of public ids is:", public_ids_array);

        const result =
            await cloudinaryInteractions.deleteFilesFromFolder(
                public_ids_array,
            );

        console.log("the content of result is:", result);

        await folderModel.deleteFolder(username, folderName);

        res.redirect("/my-storage");
    },
};
export default myStorageController;
