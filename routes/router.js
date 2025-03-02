import { Router } from "express";

// Routes
import indexRouter from "./indexRouter.js";
import registerRouter from "./registerRouter.js";
import loginRouter from "./loginRouter.js";
import logoutRouter from "./logoutRouter.js";
import myStorageRouter from "./myStorageRouter.js";

// Middleware;
import allowIfLogged from "../middleware/allowIfLogged.js";
import checkIfUserIsLogged from "../middleware/checkIfUserIsLogged.js";
import attachUserToRes from "../middleware/attachUserToRes.js";
import setActiveLink from "../middleware/setActiveLink.js";

const router = Router();

router.use(attachUserToRes);
router.use(setActiveLink);
router.use("/", indexRouter);
router.use("/register", checkIfUserIsLogged, registerRouter);
router.use("/login", checkIfUserIsLogged, loginRouter);
router.use("/logout", logoutRouter);
router.use("/my-storage", allowIfLogged, myStorageRouter);

export default router;
