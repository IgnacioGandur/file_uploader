import { Router } from "express";

const logoutRouter = Router();

logoutRouter.get("/", (req, res, next) => {
    req.logout((error) => {
        if (error) {
            return next(error);
        } else {
            res.redirect("/");
        }
    });
});

export default logoutRouter;
