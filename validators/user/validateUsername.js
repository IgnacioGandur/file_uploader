import { body, validationResult } from "express-validator";
import userModel from "../../db/prisma/models/user.js";

function checkIfPasswordsMatch(password, { req }) {
    const { confirmPassword } = req.body;
    if (password !== confirmPassword) {
        throw new Error("The passwords don't match.");
    } else {
        return true;
    }
}

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

const validationChain = [
    body("username")
        .trim()
        .notEmpty()
        .withMessage("Username can't be empty.")
        .bail()
        .custom(checkIfUsernameIsAlreadyTaken),
    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password field can't be empty.")
        .bail()
        .custom(checkIfPasswordsMatch),
];

const validateUser = [
    validationChain,
    async (req, res, next) => {
        const validationErrors = validationResult(req);

        if (!validationErrors.isEmpty()) {
            return res.status(422).render("pages/register", {
                validationErrors: validationErrors.array(),
            });
        }

        return next();
    },
];

export default validateUser;
