import userFolderModel from "../db/prisma/models/userFolder.js";
import formatDate from "../utilities/formatDate.js";
import formatBytes from "../utilities/formatBytes.js";

const myStorageController = {
    myStorageGet: async (req, res) => {
        const { username } = req.user;
        const userFolder = await userFolderModel.getUserFolder(username);
        userFolder.files.forEach((file) => {
            file.uploadedAt = formatDate(file.uploadedAt);
            file.updatedAt = formatDate(file.updatedAt);
            file.size = formatBytes(file.size);
        });

        userFolder.folders.forEach((folder) => {
            folder.createdAt = formatDate(folder.createdAt);
            folder.updatedAt = formatDate(folder.updatedAt);
        });

        res.render("pages/my-storage", {
            userFolder: userFolder,
            files: userFolder.files,
        });
    },
};
export default myStorageController;
