import folderModel from "../db/prisma/models/folder.js";
import fsCreateFolder from "../utilities/fs/createFolder.js";

const myStorageController = {
    myStorageGet: (req, res) => {
        res.render("pages/my-storage");
    },

    uploadFilePost: async (req, res, next) => {
        // res.redirect("/my-storage");
        next();
    },

    createFolderPost: async (req, res) => {
        const { folderName } = req.body;
        const { username } = req.user;
        await folderModel.createFolder(username, folderName);
        fsCreateFolder(username, folderName);
        res.redirect("/my-storage");
    },
};
export default myStorageController;
