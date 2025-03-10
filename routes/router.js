import { Router } from "express";

// Routes
import registerRouter from "./registerRouter.js";
import loginRouter from "./loginRouter.js";
import logoutRouter from "./logoutRouter.js";
import myStorageRouter from "./myStorageRouter.js";
import pageNotFoundRouter from "./pageNotFoundRouter.js";
import aboutRouter from "./aboutRouter.js";

// Middleware;
import allowIfLogged from "../middleware/allowIfLogged.js";
import checkIfUserIsLogged from "../middleware/checkIfUserIsLogged.js";
import attachUserToRes from "../middleware/attachUserToRes.js";
import setActiveLink from "../middleware/setActiveLink.js";
import redirectToRegisterIfNotLogged from "../middleware/redirectToRegisterIfNotLogged.js";

const router = Router();

router.use(attachUserToRes);
router.use(setActiveLink);
router.get("/", redirectToRegisterIfNotLogged);
router.use("/register", checkIfUserIsLogged, registerRouter);
router.use("/login", checkIfUserIsLogged, loginRouter);
router.use("/logout", logoutRouter);
router.use("/my-storage", allowIfLogged, myStorageRouter);
router.use("/about", aboutRouter);
router.use("*", pageNotFoundRouter);

export default router;
