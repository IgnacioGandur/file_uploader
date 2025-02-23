import fileModel from "../db/prisma/models/file.js";
import cloudinaryInteractions from "../cloudinary/cloudinaryInteractions.js";

const deleteFileController = {
    deleteFilePost: async (req, res) => {
        const { fileId } = req.params;
        const { username } = req.user;
        const file = await fileModel.getFileById(fileId);

        await cloudinaryInteractions.deleteFile(file.cloudinary_public_id);

        await fileModel.deleteFile(fileId, username);

        res.redirect("/my-storage");
    },
};

export default deleteFileController;
