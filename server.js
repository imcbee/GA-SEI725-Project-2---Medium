// Importing Statments
const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv').config();
const navLinks = require('./navLinks');

// Controller Imports
const {articles, reviews, user} = require('./controllers');

// App Configuration
const app = express();
const port = 8080;

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));
<<<<<<< HEAD

=======
>>>>>>> f2477afb63ea4ea2cf47f16be3eb41b55e5af5ba
app.use(
    session({
        store: MongoStore.create({ mongoUrl: process.env.MONGODB_URL }),
        secret: 'super secret',
        path: "/",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 2
        },
    })
);

/* SECTION Middleware */
app.use((req, res, next) => {
    res.locals.user = req.session.currentUser;
    next();
}); 

app.use(navLinks); 
app.use('', articles);
app.use('/reviews', reviews);
app.use('/user', user);

// 404 Route
app.get('*', (req, res) => {
    res.render('404.ejs')
});

// SERVER
app.listen(process.env.PORT || port, () => {
    console.log(`Server is listening on port ${port}.`)
});