import prisma from "../db/prisma/prismaInteractions.js";
import bcrypt from "bcryptjs";
import fsCreateUserFolder from "../utilities/fs/createUserFolder.js";

const registerController = {
    registerGet: (req, res) => {
        res.render("pages/register");
    },

    registerPost: async (req, res) => {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await prisma.insertUser(username, hashedPassword);
        fsCreateUserFolder(username);

        res.redirect("/login?username=" + encodeURIComponent(username));
    },
};

export default registerController;
