const mongoose = require('mongoose');

// Schema for Reviews Database
const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    content: {
        type: String, 
        required: [true, "Reason for this rating"]
    },
    articles: {
        type: mongoose.Types.ObjectId,
        ref: 'Article',
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
    
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;