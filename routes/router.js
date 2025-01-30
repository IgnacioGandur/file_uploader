import { Router } from "express";
import indexRouter from "./indexRouter.js";

const router = Router();

router.use("/", indexRouter);

export default router;
