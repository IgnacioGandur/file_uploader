import fs from "fs";
import path from "path";

function updateFileName(
    filePath,
    parentFolderPath,
    updatedFilename,
    fileExtension,
) {
    const newPath = path.join(
        parentFolderPath,
        updatedFilename + fileExtension,
    );
    fs.renameSync(filePath, newPath);
}

export default updateFileName;
