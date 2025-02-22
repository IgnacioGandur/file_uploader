import userModel from "../../../../db/prisma/models/user.js";

async function checkIfUsernameIsAlreadyTaken(username) {
    const isAlreadyTaken =
        await userModel.checkIfUsernameIsAlreadyTaken(username);

    if (isAlreadyTaken) {
        throw new Error(
            `The username "${username}" is already taken, please try another one. `,
        );
    } else {
        return true;
    }
}

export default checkIfUsernameIsAlreadyTaken;
