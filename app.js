import "dotenv/config";

// Modules
import express from "express";
import path from "path";
import router from "./routes/router.js";
import session from "express-session";
import passport from "passport";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import { PrismaClient } from "@prisma/client";

const __dirname = import.meta.dirname;
const app = express();

// Config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Sessions
app.use(
    session({
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 30, // 1 month cookie.
        },
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        store: new PrismaSessionStore(new PrismaClient(), {
            checkPeriod: 1000 * 60 * 3,
            dbRecordIdIsSessionId: true,
            dbRecordIdFunction: undefined,
        }),
    }),
);

app.use(passport.session());

import("./middleware/passport/passport.js");
import("./cloudinary/cloudinary.js");

app.use(router);

app.listen(3000, () => {
    console.log("Listening on http://localhost:8080/");
});
