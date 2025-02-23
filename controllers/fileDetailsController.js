import fileModel from "../db/prisma/models/file.js";
import formatBytes from "../utilities/formatBytes.js";

const fileDetailsController = {
    fileDetailsGet: async (req, res) => {
        const { fileName } = req.params;
        const file = await fileModel.getFileByName(fileName);
        file.size = formatBytes(file.size, 2);
        res.render("pages/file-details.ejs", {
            file: file,
        });
    },
};

export default fileDetailsController;
