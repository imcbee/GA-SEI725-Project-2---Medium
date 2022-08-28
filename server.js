// Importing Statments
const express = require('express')


// Controller Imports
//const {post} = require('./controllers');
const controller = require('./controllers/articles_controller')


// App Configuration
const app = express();
const port = 8080;

// Middleware
//app.use('view engine', 'ejs')
// app.use(express.static('public'))// 
app.use('', controller)





// 404 Route
// app.get('*', (req, res) => {
//     res.send('404, not found')
// })




// SERVER
app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`)
})