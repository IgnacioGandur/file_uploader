import { Router } from "express";
import registerController from "../controllers/registerController.js";

const registerRouter = Router();

registerRouter.get("/", registerController.registerGet);
registerRouter.post("/", registerController.registerPost);

export default registerRouter;
