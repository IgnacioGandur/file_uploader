import path from "path";
import cloudinaryInteractions from "../cloudinary/cloudinaryInteractions.js";
import fileModel from "../db/prisma/models/file.js";

const uploadFileController = {
    uploadFilePost: async (req, res) => {
        const { username } = req.user;
        const { originalname, mimetype, size, buffer } = req.file;
        const { filename, folder } = req.body;
        const fileExtension = path.extname(originalname);
        const finalFilename = !filename ? originalname.split(".")[0] : filename;

        const public_id = `${Date.now()}/${req.body.filename ? req.body.filename : originalname.split(".")[0]}${fileExtension}`;

        const uploadResult = await cloudinaryInteractions.uploadFile(
            username,
            buffer,
            public_id,
            mimetype,
        );

        await fileModel.createFile(
            finalFilename,
            fileExtension,
            mimetype,
            size,
            username,
            folder,
            uploadResult.secure_url,
            uploadResult.public_id,
        );

        res.redirect("/my-storage");
    },
};

export default uploadFileController;
