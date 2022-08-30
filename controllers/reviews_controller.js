// Importing Statements
const express = require('express');
const router = express.Router()
const { Review } = require('../models')

// Middleware
router.use(express.json());
router.use(express.urlencoded({ extended: false }));


// Model Import
const db = require('../models');

// Index Route for User

// Show Route
    //!  How to show user's list of comments?
router.get('/:id', async (req, res, next) => {

    try{
        const allReviews = await db.Reviews.find().populate('articles').exec()
        const allArticles = await db.Articles.find();
        const context = {reviews: allReviews, articles: allArticles}
        //! need to render on new page
        //res.render('reviews/index.ejs', context)


    }catch(err){
        console.log(err);
        res.redirect('/404')
        return next()
    }
})
// Edit Route

// Create Route

// Destroy Route

// Update Route



module.exports = router;