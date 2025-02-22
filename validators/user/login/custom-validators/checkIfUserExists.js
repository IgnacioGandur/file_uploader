import userModel from "../../../../db/prisma/models/user.js";

async function checkIfUserExistsByUsername(username) {
    const userExists = await userModel.checkIfUserExistsByUsername(username);

    if (!userExists) {
        throw new Error(`The user "${username}" doesn't exists.`);
    }

    return true;
}

export default checkIfUserExistsByUsername;
