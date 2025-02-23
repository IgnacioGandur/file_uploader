import userFolderModel from "../db/prisma/models/userFolder.js";

const myStorageController = {
    myStorageGet: async (req, res) => {
        const { username } = req.user;
        const userFolder = await userFolderModel.getUserFolder(username);
        res.render("pages/my-storage", {
            userFolder: userFolder,
            files: userFolder.files,
        });
    },
};
export default myStorageController;
