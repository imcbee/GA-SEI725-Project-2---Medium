// Routes: for non-logged in users
    //things only for non-users
const routes = [
    { href: "/", title: "Home"},
    { href: "/ourstory", title: "Our Story"},
    { href: "/user/login", title: "Sign In" },
    { href: "/user/register", title: "Register" },
];


// Auth Routes: logged users
    //write
    //review
    //login, register
const authRoutes = [
    { href: "/", title: "Home"},
    { href: "/ourstory", title: "Our Story"},
    { href: "/new", title: "Write" },
    { href: "/user/logout", title: "Logout" },
];

let navLinks = function navLinks(req, res, next) {
    if (req.session.currentUser) {
         res.locals.routes = authRoutes;
    } else {
         res.locals.routes = routes;
    }
    next()
};

module.exports = navLinks