// Importing Statements
const express = require('express');
const router = express.Router();

// Middleware
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// Model Import
const db = require('../models');

// 'Our Story' Route
router.get('/ourstory', async(req, res, next) => {
    const userSession = await db.User.find(req.session.currentUser);
    const context = {
        username: userSession, 
        routes: res.locals.routes
    };
    res.render('ourstory.ejs', context);
});

// New Route
router.get('/new', async (req, res) => {
    const userSession = await db.User.find(req.session.currentUser);
    const context = {
        username: userSession, 
        routes: res.locals.routes
    };
    res.render('new.ejs', context);
});

// Create Route
router.post('/', async (req, res, next) => {
    try{
        let createdArticle = {
            author: req.body.author,
            title: req.body.title,
            text: req.body.text,
            publishDate: req.body.publishDate,
            image: req.body.image,
            user: req.session.currentUser.id,
            vote: req.body.vote
        };
        const newArticle = await db.Articles.create(createdArticle);
        res.redirect('/');

    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    };
});

// Show Route
router.get('/:id', async (req ,res, next) => {  
    try{
        const foundArticle = await db.Articles.findById(req.params.id);
        const articleReview = await db.Reviews.find({articles: req.params.id});
        const userSession = await db.User.find(req.session.currentUser);
        
        if(req.session) {
            const session =req.session;
            const context = {
                articles: foundArticle, 
                id: foundArticle._id, 
                reviews: articleReview, 
                username: userSession, 
                routes: res.locals.routes,
                userId: foundArticle.user,
                session: session 
            };
            res.render('show.ejs', context);
        }else {
            const context = {
            articles: foundArticle, 
            id: foundArticle._id, 
            reviews: articleReview, 
            username: userSession, 
            routes: res.locals.routes,
            userId: foundArticle.user 
            };
            res.render('show.ejs', context);
        };
    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    };
});

// Index Route
router.get('/', async (req, res, next) => {
    try{
        const allArticles = await db.Articles.find();
        const userSession = await db.User.find(req.session.currentUser);
        const context = {
            articles: allArticles, 
            username: userSession, 
            routes: res.locals.routes
        };
        res.render("index.ejs", context);
    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    };
});

// Destroy Route
router.delete('/:id', async (req, res, next) =>{    
    try{
        const foundArticle = await db.Articles.findByIdAndDelete(req.params.id);
        return res.redirect('/');
    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    };
});

// Edit Route
router.get('/:id/edit', async (req, res, next) => {
    try{
        const foundArticle = await db.Articles.findById(req.params.id);
        const userSession = await db.User.find(req.session.currentUser);
        const context = {
            articles: foundArticle, 
            id: foundArticle._id, 
            username: userSession, 
            routes: res.locals.routes
        };
        res.render('edit.ejs', context);
    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    };
});

// Update Route
router.put('/:id', async (req, res, next) => {
    try{
        const updatedArticle = req.body;
        await db.Articles.findByIdAndUpdate(req.params.id, updatedArticle, {new:true});
        res.redirect(`/${req.params.id}`);
    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    }
})

module.exports = router;