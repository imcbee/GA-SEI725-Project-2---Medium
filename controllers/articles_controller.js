// Importing Statements
const express = require('express');
const router = express.Router();


// Middleware

// Model Import
const db = require('../models')

// New Route
router.get('/new', (req, res) => {
    res.send('hello')
})

// Create Route
router.post('/', (req, res, next) => {
    res.send('hi')

    // try{

    // }catch(err) {
    //     console.log(err)
    //     //res.redirect('/products');
    // }
})

// Show Route
router.get('/:id', (req ,res, next) => {
    res.send('hi')
    
    // try{

    // }catch(err) {
    //     console.log(err)
    //     //res.redirect('/products');
    // }
})


// Index Route
router.get('/', (req, res, next) => {
    res.send('hi')
    
    // try{

    // }catch(err) {
    //     console.log(err)
    //     //res.redirect('/products');
    // }
})


// Destroy Route
router.delete('/:id', (req, res, next) =>{
    res.send('hi')
    
    // try{

    // }catch(err) {
    //     console.log(err)
    //     //res.redirect('/products');
    // }
})


// Edit Route
router.get('/:id/edit', (req, res, next) => {
    res.send('hi')
    
    // try{

    // }catch(err) {
    //     console.log(err)
    //     //res.redirect('/products');
    // }
})


// Update Route
router.put('/:id', (req, res, next) => {
    res.send('hi')
    
    // try{

    // }catch(err) {
    //     console.log(err)
    //     //res.redirect('/products');
    // }
})




module.exports = router;