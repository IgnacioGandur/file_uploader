import path from "path";
import fs from "fs";

const __dirname = import.meta.dirname;
function updateFolderName(username, previousFolderName, updatedFolderName) {
    const basePath = path.join(
        __dirname,
        "..",
        "..",
        "public",
        "uploads",
        username,
    );
    const oldPath = path.join(basePath, previousFolderName);
    const newPath = path.join(basePath, updatedFolderName);

    fs.renameSync(oldPath, newPath);
}

export default updateFolderName;
