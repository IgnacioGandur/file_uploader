import { Router } from "express";
import indexRouter from "./indexRouter.js";
import registerRouter from "./registerRouter.js";
import loginRouter from "./loginRouter.js";
import logoutRouter from "./logoutRouter.js";
import attachUserToRes from "../middleware/attachUserToRes.js";
import checkIfUserIsLogged from "../middleware/checkIfUserIsLogged.js";

const router = Router();

router.use(attachUserToRes);
router.use("/", indexRouter);
router.use("/register", checkIfUserIsLogged, registerRouter);
router.use("/login", checkIfUserIsLogged, loginRouter);
router.use("/logout", logoutRouter);

export default router;
