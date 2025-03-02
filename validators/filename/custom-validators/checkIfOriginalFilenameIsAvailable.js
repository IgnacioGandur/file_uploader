import fileModel from "../../../db/prisma/models/file.js";

// FIX: This allways get executed when uploading a file, make sure only happens when no filename is provided.

// This checks if the original filename is available when no new filename is provided to the file.
async function checkIfOriginalFilenameIsAvailable(_, { req }) {
    if (req.body.filename === undefined) {
        const { username } = req.user;
        const { originalname } = req.file;

        const filename = originalname.slice(0, originalname.lastIndexOf("."));

        const isAvailable = await fileModel.checkIfFilenameIsAvailable(
            username,
            filename,
        );
        if (!isAvailable) {
            throw new Error(
                `You already have another file called "${filename}", please user another name.`,
            );
        }
    }

    return true;
}

export default checkIfOriginalFilenameIsAvailable;
