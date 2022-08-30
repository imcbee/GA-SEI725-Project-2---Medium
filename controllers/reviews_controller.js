// Importing Statements
const express = require('express');
const router = express.Router()
const { Review } = require('../models')

// Middleware
router.use(express.json());
router.use(express.urlencoded({ extended: false }));


// Model Import
const db = require('../models');

// New Route
router.get('/new', async (req, res, next) => {
    res.send('yo yo yo')


})
// Create Route


// Show Route
//!  How to show user's list of comments?
router.get('/:id/', async (req, res, next) => {
    //res.send("hello hello hello")

    try{
        const articleReview = await db.Reviews.findById(req.params.id)
        const article = await db.Articles.findById(req.params.id)
        const context = {reviews: articleReview, article: article}
        console.log(articleReview)
        console.log(article)
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
    //res.send('delete review')

    try{
        //console.log(req.params.id)
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
    //res.send('oh my my my')
    
    try{
        const newReview = await db.Reviews.create(req.body)
        res.redirect(`/reviews/${newReview._id}`)
    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    }
})


// Update Route



module.exports = router;