// Importing Statements
const express = require('express');
const router = express.Router()
const { Review } = require('../models')

// Middleware
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// Model Import
const db = require('../models');

// Create Route
router.post('/:id', async (req, res, next) => {
    
    try{
        
        const newReview = await db.Reviews.create({
            rating: req.body.rating,
            content: req.body.content,
            articles: req.params.id,
            user: req.session.currentUser.id
        });
        
        res.redirect(`/${req.params.id}`)
    }catch(err){
        console.log(err);
        res.redirect('/404')
        return next()
    }
})

// Show Route
router.get('/:id/', async (req, res, next) => {
    //res.send("hello hello hello")

    try{
        const articleReview = await db.Reviews.findById(req.params.id)
        const article = await db.Articles.findById(req.params.id)
        const userSession = await db.User.find(req.session.currentUser)
        const context = {
            reviews: articleReview,
            article: article,
            username: userSession, 
            routes: res.locals.routes
        }

        
        
        res.render('reviews/show.ejs', context)
        
        
    }catch(err){
        console.log(err);
        res.redirect('/404')
        return next()
    }
})

// Index Route for User?????

// Destroy Route
router.delete('/:id', async (req, res, next) => {

    try{
        const foundReview = await db.Reviews.findByIdAndDelete(req.params.id)
        return res.redirect('/')
    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    }
})

// Edit Route
router.get('/:id/edit', async (req, res, next)=>{
    
    try{
        const newReview = await db.Reviews.findById(req.params.id)
        const userSession = await db.User.find(req.session)
        const context = {
            username: userSession, 
            routes: res.locals.routes,
            reviews: newReview, 
            id: newReview._id,
        }
        
        res.render('reviews/edit.ejs', context);
    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    }
})

// Update Route
router.put('/:id', async (req, res, next) => {
    
    try{
        const updatedReview = req.body;
        await db.Reviews.findByIdAndUpdate(req.params.id, updatedReview, {new:true})
        res.redirect(`/reviews/${req.params.id}`);
    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    }
})

module.exports = router;