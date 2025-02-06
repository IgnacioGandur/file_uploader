import fs from "fs";

function deleteFile(path) {
    fs.unlinkSync(path);
}

export default deleteFile;
