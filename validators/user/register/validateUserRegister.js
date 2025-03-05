import { body, validationResult } from "express-validator";
import checkIfPasswordsMatch from "./custom-validators/checkIfPasswordsMatch.js";
import checkIfUsernameIsAlreadyTaken from "./custom-validators/checkIfUsernameIsAlreadyTaken.js";
import checkIfUsernameMatchesRegex from "./custom-validators/checkIfUsernameMatchesRegex.js";

const validationChain = [
    body("username")
        .escape()
        .trim()
        .notEmpty()
        .withMessage("Username can't be empty.")
        .bail()
        .custom(checkIfUsernameMatchesRegex)
        .custom(checkIfUsernameIsAlreadyTaken),
    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password field can't be empty.")
        .bail()
        .custom(checkIfPasswordsMatch),
];

const validateUserRegister = [
    validationChain,
    async (req, res, next) => {
        const validationErrors = validationResult(req);
        const { username, password, confirmPassword } = req.body;

        if (!validationErrors.isEmpty()) {
            return res.status(422).render("pages/register", {
                validationErrors: validationErrors.array(),
                userInputs: {
                    username: username,
                    password: password,
                    confirmPassword: confirmPassword,
                },
            });
        }

        return next();
    },
];

export default validateUserRegister;
