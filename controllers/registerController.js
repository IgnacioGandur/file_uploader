import bcrypt from "bcryptjs";
import fsCreateUserFolder from "../utilities/fs/createUserFolder.js";
import userModel from "../db/prisma/models/user.js";
import userFolderModel from "../db/prisma/models/userFolder.js";

const registerController = {
    registerGet: (req, res) => {
        res.render("pages/register");
    },

    registerPost: async (req, res) => {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const ownerId = await userModel.createUser(username, hashedPassword);
        await userFolderModel.createUserFolder(username, ownerId);
        fsCreateUserFolder(username);

        res.redirect("/login?username=" + encodeURIComponent(username));
    },
};

export default registerController;
