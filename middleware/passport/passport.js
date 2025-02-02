import passport from "passport";
import strategy from "./local-strategy.js";
import userModel from "../../db/prisma/models/user.js";

passport.use(strategy);

passport.serializeUser((user, callback) => {
    callback(null, user.id);
});

passport.deserializeUser(async (userId, callback) => {
    const user = await userModel.getUserById(userId);
    callback(null, user);
});
