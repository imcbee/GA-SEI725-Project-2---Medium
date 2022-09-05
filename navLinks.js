// Routes for non-logged in users
const routes = [
    { href: "/", title: "Home"},
    { href: "/ourstory", title: "Our Story"},
    { href: "/user/login", title: "Sign In" },
    { href: "/user/register", title: "Register" },
];


// Auth Routes for logged users
const authRoutes = [
    { href: "/", title: "Home"},
    { href: "/ourstory", title: "Our Story"},
    { href: "/new", title: "Write" },
    { href: "/user/logout", title: "Logout" },
];

// Determines which routes to display
let navLinks = function navLinks(req, res, next) {
    if (req.session.currentUser) {
         res.locals.routes = authRoutes;
    } else {
         res.locals.routes = routes;
    }
    next()
};

module.exports = navLinks