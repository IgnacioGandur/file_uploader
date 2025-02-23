import folderModel from "../db/prisma/models/folder.js";

const updateFolderController = {
    updateFolderPost: async (req, res) => {
        const { username } = req.user;
        const { folderName } = req.params;
        const { updatedFolderName } = req.body;

        await folderModel.updateFolderName(
            folderName,
            username,
            updatedFolderName,
        );
        res.redirect("/my-storage");
    },
};

export default updateFolderController;
