import { Router } from "express";
import registerController from "../controllers/registerController.js";
import validateUser from "../validators/user/validateUsername.js";

const registerRouter = Router();

registerRouter.get("/", registerController.registerGet);
registerRouter.post("/", validateUser, registerController.registerPost);

export default registerRouter;
