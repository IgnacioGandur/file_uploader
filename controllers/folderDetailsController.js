import folderModel from "../db/prisma/models/folder.js";

const folderDetailsController = {
    folderDetailsGet: async (req, res) => {
        const { folderName } = req.params;
        const { username } = req.user;
        const folder = await folderModel.getFolderByName(username, folderName);
        res.render("pages/folder-details.ejs", {
            folder: folder,
            files: folder.files,
        });
    },
};

export default folderDetailsController;
