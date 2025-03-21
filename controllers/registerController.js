import bcrypt from "bcryptjs";
import userModel from "../db/prisma/models/user.js";
import userFolderModel from "../db/prisma/models/userFolder.js";
import cloudinaryInteractions from "../cloudinary/cloudinaryInteractions.js";

const registerController = {
    registerGet: (req, res) => {
        res.render("pages/register");
    },

    registerPost: async (req, res) => {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const ownerId = await userModel.createUser(username, hashedPassword);
        await userFolderModel.createUserFolder(username, ownerId);
        cloudinaryInteractions.createUserFolder(username);

        res.redirect("/login?username=" + encodeURIComponent(username));
    },
};

export default registerController;
