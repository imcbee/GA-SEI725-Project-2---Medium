// Importing Statments
const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session')
const MongoStore = require('connect-mongo');
require('dotenv').config();

// Controller Imports
const {articles, reviews, user} = require('./controllers');
//const controller = require('./controllers/articles_controller')

// App Configuration
const app = express();
const port = 8080;

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));

// app.use(
//     session({
//         store: MongoStore.create({ mongoURL: process.env.MONGODB_URL }),
//         secret: 'super secret',
//         resave: false,
//         saveUninitialized: false,
//         cookie: {
//             maxAge: 1000 * 60 * 60 * 24 * 7 * 2
//         },
//     })
// );

app.use('', articles);
app.use('/reviews', reviews);
app.use('', user);

// 404 Route
app.get('*', (req, res) => {
    res.render('404.ejs')
})

// SERVER
app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`)
})