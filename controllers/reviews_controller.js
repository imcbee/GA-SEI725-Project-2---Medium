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
        const context = {reviews: articleReview}
        console.log(articleReview)
        res.render('reviews/show.ejs', context)
        
        
    }catch(err){
        console.log(err);
        res.redirect('/404')
        return next()
    }
})

// Index Route for User?????

// Destroy Route
router.delete('', async (req, res, next) => {
    
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