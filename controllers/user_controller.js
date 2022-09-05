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
router.get('/login', async (req, res, next) => {
    const userSession = await db.User.find(req.session.currentUser);
    const context = {
        username: userSession, 
        routes: res.locals.routes
    };
    res.render('user/login.ejs', context);
});

// Registration Page
router.get('/register', async (req, res, next) => {
    const userSession = await db.User.find(req.session.currentUser);
    const context = {
        username: userSession, 
        routes: res.locals.routes
    };
    res.render('user/register.ejs', context);
    
});

// Post Route for Login Page
router.post('/login', async (req, res, next) => {
    try{
        let formData = req.body;
        let foundUser = await db.User.findOne({ email: formData.email });
        
        if(!foundUser) {
            return res.redirect('/user/register');
        }else {
            const match = await bcrypt.compare(formData.password, foundUser.password);
            if(!match) return res.send('Email or Password does not match!');
            
            req.session.currentUser = {
                id: foundUser._id,
                username: foundUser.username
            };

            res.redirect('/');
        };
    }catch(err){
        console.log(err);
        res.redirect('/404');
        return next();
    };
});

// Post Route for Registration Page
router.post('/register', async (req, res, next) => { 
    try{
        let formData = req.body;
        let foundUser = await db.User.exists({email: formData.email});        

        if(foundUser) return res.redirect("/user/login");
        let rounds = parseInt(process.env.SALT_ROUNDS);
        let salt = await bcrypt.genSalt(rounds);
        let hash = await bcrypt.hash(formData.password, salt);

        formData.password = hash;

        await db.User.create(formData);
        return res.redirect('/user/login');
    }catch(err){
        console.log(err);
        res.redirect('/404');
        return next();
    };
});

// Logout Page
router.get('/logout', async (req, res, next) => {
    try{
        await req.session.destroy();
        return res.redirect("/user/login");
    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    };
});

module.exports = router;