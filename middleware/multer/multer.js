import multer from "multer";
import path from "path";
import folderModel from "../../db/prisma/models/folder.js";

const __dirname = import.meta.dirname;
const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        const { folder: folderId } = req.body;
        const folder = folderId
            ? await folderModel.getFolderNameById(folderId)
            : null;
        const { username } = req.user;
        const finalPath = path.join(
            __dirname,
            "..",
            "..",
            "public",
            "uploads",
            username,
            folder ? folder.name : "",
        );
        cb(null, finalPath);
    },
    filename: (req, file, cb) => {
        const { filename } = req.body;
        const { originalname } = file;
        const fileExtension = path.extname(originalname);
        const finalName = filename ? filename + fileExtension : originalname;

        req.body.fileExtension = fileExtension;
        cb(null, finalName);
    },
});

const upload = multer({ storage: storage });

export default upload;
