// Importing Statments
const express = require('express');
const methodOverride = require('method-override');


// Controller Imports
//const {articles, reviews} = require('./controllers');
const controller = require('./controllers/articles_controller')


// App Configuration
const app = express();
const port = 8080;

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use('', controller)





// 404 Route
app.get('*', (req, res) => {
    res.render('404.ejs')
})




// SERVER
app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`)
})