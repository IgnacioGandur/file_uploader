function redirectToRegisterIfNotLogged(req, res) {
    if (!req.isAuthenticated()) {
        res.redirect("/register");
    } else {
        res.redirect("/my-storage");
    }
}

export default redirectToRegisterIfNotLogged;
