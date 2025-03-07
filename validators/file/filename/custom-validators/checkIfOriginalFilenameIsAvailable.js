import fileModel from "../../../../db/prisma/models/file.js";

async function checkIfOriginalFilenameIsAvailable(_, { req }) {
    if (!req.body.filename) {
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
