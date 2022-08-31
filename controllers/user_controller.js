// Importing Statements
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models');
require('dotenv').config();

// Middleware
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// Login Page
router.get('/login', (req, res, next) => {
    res.render('user/login.ejs')
});


// Registration Page
router.get('/register', (req, res, next) => {
    res.render('user/register.ejs')
    
});

// Post Route for Login Page
router.post('/login', async (req, res, next) => {
    try{
        let foundData = req.body;
        let foundUser = await db.User.findOne({email: foundData.email})

        if(!foundUser) {
            return res.redirect('/register');
        }else {
            const match = await bcrypt.compare(formData.password, foundUser.password);

            if(!match) return res.send('Email or Password does not match!');
            
            req.session.currentUser = {
                id: foundUser._id,
                username: foundUser.username
            };

            res.redirect('/')
        }
    }catch(err){
        console.log(err);
        res.redirect('/404');
        return next();
    }
});

// Post Route for Registration Page
router.post('/register', (req, res, next) => { 
    try{

    }catch{

    }
});

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
});








module.exports = router;