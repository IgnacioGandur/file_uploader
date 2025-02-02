import multer from "multer";
import path from "path";

const __dirname = import.meta.dirname;
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const { username } = req.user;
        const basePath = path.join(__dirname, "..", "..", "public", username);
        if (req.body.folderId) {
            const { folderId } = req.body;
            const folderName = undefined; // TODO: get the folder name from the db using the folder id.
            const destinPath = path.join(basePath, folderName);
            return cb(null, destinPath);
        } else {
            return cb(null, basePath);
        }
    },
    filename: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname);

        cb(null, "filename" + fileExtension);
    },
});

const upload = multer({ storage: storage });

export default upload;
