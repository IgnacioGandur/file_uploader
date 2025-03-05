function checkIfUserIsLogged(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect("/my-storage");
    } else {
        return next();
    }
}

export default checkIfUserIsLogged;
