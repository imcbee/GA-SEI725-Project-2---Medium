// Importing Statements
const express = require('express');
const { articles } = require('.');
const router = express.Router();
//require('../config/db.connection')

// Middleware
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// Model Import
//const articles = require('../models/tempDB')
const db = require('../models')

// New Route
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// Create Route
router.post('/', async (req, res, next) => {
    //res.send('hi')
    const createdArticle = req.body
    //articles.push(createdArticle)

    try{
        const newArticle = await db.Articles.create(createdArticle);
        //console.log(newArticle)
        //console.log(req.body)

        res.redirect('/')

    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    }
})

// Show Route
router.get('/:id', async (req ,res, next) => {
    //res.send('howdy')
    
    try{
        const foundArticle = await db.Articles.findById(req.params.id)
        const articleReview = await db.Reviews.find()
        //const articleReview = await db.Reviews.findById(req.params.id).populate("articles").exec()
        let specificReview = [];  //! don't need this after refactor
        for(let i =0; i<articleReview.length; i++) {  //! don't need this for loop and conditional after refactoring
            console.log(articleReview[i])
            if(articleReview[i].articles.equals(foundArticle._id)  ) {
                console.log('hi')
                specificReview.push(articleReview[i]);
            };
        };
        const context = {articles: foundArticle, id: foundArticle._id, reviews: specificReview}  //! change to reviews: articleReview
        //console.log(articleReview)
        res.render('show.ejs', context)
    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    }
})

// Index Route
router.get('/', async (req, res, next) => {
    //res.send('hey hey hey')
    
    try{
        const allArticles = await db.Articles.find()
        const context = {articles: allArticles};
        //console.log(allArticles)
        res.render("index.ejs", context);
    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    }
})

// Destroy Route
router.delete('/:id', async (req, res, next) =>{
    //res.send('delete')
    
    try{
        const foundArticle = await db.Articles.findByIdAndDelete(req.params.id);
        //const deleteReview = await db.Articles.findByIdAndDelete({article: foundArticle._id})
        //console.log(foundArticle);
        return res.redirect('/');
    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    }
})

// Edit Route
router.get('/:id/edit', async (req, res, next) => {
    //res.send('edit')
    // const foundArticle = articles[req.params.id];
    // const context = {article: foundArticle, id: req.params.id };
    // res.render('edit.ejs', context)
    
    try{
        const foundArticle = await db.Articles.findById(req.params.id);
        //console.log(foundArticle);
        //let article = articles[req.params.id];
        res.render('edit.ejs', {articles: foundArticle, id: foundArticle._id});
    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    }
})

// Update Route
router.put('/:id', async (req, res, next) => {
    //res.send('hi')
    
    try{
        const updatedArticle = req.body;
        await db.Articles.findByIdAndUpdate(req.params.id, updatedArticle, {new:true})
        res.redirect(`/${req.params.id}`);
    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    }
})

module.exports = router;