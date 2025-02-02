import path from "path";
import fs from "fs";

const __dirname = import.meta.dirname;

function fsCreateFolder(username, folderName) {
    const destinPath = path.join(
        __dirname,
        "..",
        "..",
        "public",
        "uploads",
        username,
        folderName,
    );
    fs.mkdirSync(destinPath, { recursive: true });
}

export default fsCreateFolder;
