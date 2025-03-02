import fileModel from "../../../db/prisma/models/file.js";

async function checkIfFilenameIsAvailable(filename, { req }) {
    const { username } = req.user;
    const isAvailable = await fileModel.checkIfFilenameIsAvailable(
        username,
        filename,
    );
    if (!isAvailable) {
        throw new Error(
            `You already have another file called "${filename}", please use another name.`,
        );
    }
}

export default checkIfFilenameIsAvailable;
