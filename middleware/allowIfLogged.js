function allowIfLogged(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect(
            "/login?message=" +
                encodeURIComponent(
                    `You need to be logged to visit "/my-storage" path. `,
                ),
        );
    }
}

export default allowIfLogged;
