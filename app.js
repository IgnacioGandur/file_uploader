import "dotenv/config";

// Modules
import express from "express";
import path from "path";
import router from "./routes/router.js";

const __dirname = import.meta.dirname;
const app = express();

// Config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(8080, () => {
    console.log("Listening on http://localhost:8080/");
});
