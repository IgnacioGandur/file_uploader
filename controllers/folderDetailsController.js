import folderModel from "../db/prisma/models/folder.js";
import formatDate from "../utilities/formatDate.js";
import formatBytes from "../utilities/formatBytes.js";

const folderDetailsController = {
    folderDetailsGet: async (req, res) => {
        const { folderName } = req.params;
        const { username } = req.user;
        const folder = await folderModel.getFolderByName(username, folderName);
        folder.createdAt = formatDate(folder.createdAt);
        folder.updatedAt = formatDate(folder.updatedAt);
        folder.files.forEach((file) => {
            file.uploadedAt = formatDate(file.uploadedAt);
            file.updatedAt = formatDate(file.updatedAt);
            file.size = formatBytes(file.size);
        });
        res.render("pages/folder-details.ejs", {
            folder: folder,
            files: folder.files,
        });
    },
};

export default folderDetailsController;
