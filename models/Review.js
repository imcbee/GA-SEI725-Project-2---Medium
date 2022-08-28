const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    content: {
        type: String, 
        required: true 
    },
    ariticles: {
        type: mongoose.Types.ObjectId,
        ref: 'Article',
    },
}, { timestamps: true })

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

// basically copy pasta from sell it up. makes life a bit easier on us.
// if you guys wanna change anything feel free to do so. :)