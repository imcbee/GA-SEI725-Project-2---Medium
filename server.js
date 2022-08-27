// Importing Statments
const express = require('express')


// Controller Imports
//const {post} = require('./controllers');
const controller = require('./controllers/post_controller')


// App Configuration
const app = express();
const port = 8080;

// Middleware





app.use('/post', controller)

// Home Route
app.get('/', (req, res) => {
    res.send('hello')
})


// 404 Route
app.get('*', (req, res) => {
    res.send('404, not found')
})




// SERVER
app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`)
})