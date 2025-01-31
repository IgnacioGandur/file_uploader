function checkIfUserIsLogged(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect("/");
    } else {
        return next();
    }
}

export default checkIfUserIsLogged;
