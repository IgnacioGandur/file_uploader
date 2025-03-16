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

        // FIX: when original filename is used, the public_id doesn't get formed like when the filename is provided.
        const public_id = `${Date.now()}/${finalFilename}${fileExtension}`;

        // const uploadResult = await cloudinaryInteractions.uploadFile(
        //     buffer, // File buffer.
        //     public_id, // File name in cloudinary.
        //     username, // User folder to store the file into.
        // );

        const uploadResult = await cloudinaryInteractions.uploadFile(
            username,
            buffer,
            public_id,
            mimetype,
        );

        const prismaResult = await fileModel.createFile(
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
