import folderModel from "../db/prisma/models/folder.js";
import cloudinaryInteractions from "../cloudinary/cloudinaryInteractions.js";

const deleteFolderController = {
    deleteFolderPost: async (req, res) => {
        const { folderName } = req.params;
        const { username } = req.user;

        const folder = await folderModel.getFolderByName(username, folderName);

        const public_ids_array = [];

        for (let i = 0; i < folder.files.length; i++) {
            public_ids_array.push(folder.files[i].cloudinary_public_id);
        }

        await cloudinaryInteractions.deleteFilesFromFolder(public_ids_array);

        await folderModel.deleteFolder(username, folderName);

        res.redirect("/my-storage");
    },
};

export default deleteFolderController;
