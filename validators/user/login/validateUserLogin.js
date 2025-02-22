import { body, validationResult } from "express-validator";
import checkIfUserExistsByUsername from "./custom-validators/checkIfUserExists.js";
import checkIfPasswordIsCorrect from "./custom-validators/checkIfPasswordIsCorrect.js";

const validationChain = [
    body("username")
        .trim()
        .notEmpty()
        .withMessage("The username field can't be empty.")
        .bail()
        .custom(checkIfUserExistsByUsername)
        .bail(),
    body("password")
        .trim()
        .notEmpty()
        .withMessage("The password field can't be empty.")
        .custom(checkIfPasswordIsCorrect),
];

const validateUserLogin = [
    validationChain,
    async (req, res, next) => {
        const { username } = req.query;
        const validationErrors = validationResult(req);

        if (!validationErrors.isEmpty()) {
            return res.status(422).render("pages/login", {
                username: username,
                validationErrors: validationErrors.array(),
            });
        } else {
            return next();
        }
    },
];

export default validateUserLogin;
