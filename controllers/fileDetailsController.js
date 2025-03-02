import fileModel from "../db/prisma/models/file.js";
import formatBytes from "../utilities/formatBytes.js";
import formatDate from "../utilities/formatDate.js";

const fileDetailsController = {
    fileDetailsGet: async (req, res) => {
        const { fileName } = req.params;
        const file = await fileModel.getFileByName(fileName);
        file.size = formatBytes(file.size, 2);
        file.uploadedAt = formatDate(file.uploadedAt);
        file.updatedAt = formatDate(file.updatedAt);
        res.render("pages/file-details.ejs", {
            file: file,
        });
    },
};

export default fileDetailsController;
