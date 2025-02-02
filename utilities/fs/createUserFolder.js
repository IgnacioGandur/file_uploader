import path from "path";
import fs from "fs";
const __dirname = import.meta.dirname;

function fsCreateUserFolder(username) {
    const destinPath = path.join(
        __dirname,
        "..",
        "..",
        "public",
        "uploads",
        username,
    );
    fs.mkdirSync(destinPath, { recursive: true });
}

export default fsCreateUserFolder;
