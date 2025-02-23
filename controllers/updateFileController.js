import fileModel from "../db/prisma/models/file.js";
import cloudinaryInteractions from "../cloudinary/cloudinaryInteractions.js";

const updateFileController = {
    updateFilePost: async (req, res) => {
        console.log("the content of req.params is:", req.params);
        const { fileId } = req.params;
        const { username } = req.user;
        const { updatedFilename } = req.body;
        console.log("the content of file id in update file post is:", fileId);
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
};

export default updateFileController;
