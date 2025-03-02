function setActiveLink(req, res, next) {
    res.locals.activeLink = req.originalUrl;
    next();
}

export default setActiveLink;
