import { Router } from "express";
import passport from "passport";
import loginController from "../controllers/loginController.js";
import validateUserLogin from "../validators/user/login/validateUserLogin.js";

const loginRouter = Router();

loginRouter.get("/", loginController.loginGet);
loginRouter.post(
    "/",
    validateUserLogin,
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
    }),
);

export default loginRouter;
