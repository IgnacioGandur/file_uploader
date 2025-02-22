import { Router } from "express";
import registerController from "../controllers/registerController.js";
import validateUserRegister from "../validators/user/register/validateUserRegister.js";

const registerRouter = Router();

registerRouter.get("/", registerController.registerGet);
registerRouter.post("/", validateUserRegister, registerController.registerPost);

export default registerRouter;
