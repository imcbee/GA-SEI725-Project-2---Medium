const routes = [
    { href: "/new", title: "New Product" },
    { href: "/user/logout", title: "Logout" },
];

const authRoutes = [
    { href: "/user/login", title: "Login" },
    { href: "/user/register", title: "Register" },
];

let navLinks = function navLinks(req, res, next) {
    if (req.session.currentUser) {
        res.locals.routes = routes;
    } else {
        res.locals.routes = authRoutes;
    }
    // locals
    next();
};

module.exports = navLinks