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

        const public_id = `${Date.now()}/${finalFilename}${fileExtension}`;

        const uploadResult = await cloudinaryInteractions.uploadFile(
            buffer, // File buffer.
            public_id, // File name in cloudinary.
            username, // User folder to store the file into.
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

        console.log("The content of  cloudinary upload is:", uploadResult);
        console.log("The content of  prisma upload is:", prismaResult);

        res.redirect("/my-storage");
    },
};

export default uploadFileController;
