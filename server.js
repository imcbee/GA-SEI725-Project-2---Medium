// Importing Statments
const express = require('express')




// App Configuration
const app = express();
const port = 8080;

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