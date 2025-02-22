import userModel from "../../../../db/prisma/models/user.js";
import bcrypt from "bcryptjs";

async function checkIfPasswordIsCorrect(password, { req }) {
    const { username } = req.body;

    const user = await userModel.getUserByUsername(username);

    if (!user) {
        return;
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (!passwordsMatch) {
        throw new Error("The password is not correct.");
    }
}

export default checkIfPasswordIsCorrect;
