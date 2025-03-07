import { Router } from "express";
import pageNotFoundController from "../controllers/pageNotFoundController.js";

const pageNotFoundRouter = Router();
pageNotFoundRouter.get("/", pageNotFoundController.pageNotFoundGet);

export default pageNotFoundRouter;
