function attachUserToRes(req, res, next) {
    if (req.user) {
        res.locals.user = req.user;
        next();
    } else {
        next();
    }
}

export default attachUserToRes;
