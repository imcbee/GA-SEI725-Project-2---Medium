// Importing Statments
const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv').config();
const navLinks = require('./navLinks');
const db = require('./models');

// Controller Imports
const {articles, reviews, user} = require('./controllers');

// App Configuration
const app = express();
const port = 8080;

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));

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
app.get('*', async (req, res, next) => {
    const userSession = await db.User.find(req.session.currentUser);
    const context = {username: userSession}
    res.render('404.ejs', context)
});

// SERVER
app.listen(process.env.PORT || port, () => {
    console.log(`Server is listening on port ${port}.`)
});