const myStorageController = {
    myStorageGet: (req, res) => {
        res.render("pages/my-storage");
    },

    uploadFilePost: async (req, res, next) => {
        // res.redirect("/my-storage");
        next();
    },
};
export default myStorageController;
