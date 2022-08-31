// Importing Statements
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Middleware
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// Login Page
router.checkout('/login', (req, res, next) => {
    res.render('hello!  Want to login')
})

// Registration Page

// Post Route for Login Page

// Post Route for Registration Page

// Logout Page
router.get('/logout', async (req, res, next) => {
    try{
        await req.session.destroy();
        return res.redirect("/login");
    }catch(err) {
        console.log(err);
        res.redirect('/404')
        return next()
    }
})








module.exports = router;