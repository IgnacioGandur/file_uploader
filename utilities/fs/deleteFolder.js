import path from "path";
import fs from "fs";

const __dirname = import.meta.dirname;
function deleteFolder(username, folderName) {
    const targetPath = path.join(
        __dirname,
        "..",
        "..",
        "public",
        "uploads",
        username,
        folderName,
    );

    fs.rmSync(targetPath, { recursive: true, force: true });
}

export default deleteFolder;
