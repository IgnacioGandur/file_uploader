import folderModel from "../db/prisma/models/folder.js";

const createFolderController = {
    createFolderPost: async (req, res) => {
        const { folderName } = req.body;
        const { username } = req.user;

        await folderModel.createFolder(username, folderName);

        res.redirect("/my-storage");
    },
};

export default createFolderController;
