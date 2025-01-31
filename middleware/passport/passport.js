import passport from "passport";
import strategy from "./local-strategy.js";
import prisma from "../../db/prisma/prismaInteractions.js";

passport.use(strategy);

passport.serializeUser((user, callback) => {
    callback(null, user.id);
});

passport.deserializeUser(async (userId, callback) => {
    const user = await prisma.getUserById(userId);
    callback(null, user);
});
