const loginController = {
    loginGet: (req, res) => {
        const { username } = req.query;
        res.render("pages/login", {
            username: username,
        });
    },

    loginPost: async (req, res) => {
        res.redirect("/");
    },
};

export default loginController;
