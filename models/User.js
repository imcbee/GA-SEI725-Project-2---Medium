const mongoose = require('mongoose');

// Schema for User Database
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Provide An Email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Provide Password"],
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
        default: "https://www.w3schools.com/howto/img_avatar.png",
    }, 
    reviews: { 
        type: mongoose.Types.ObjectId, 
        ref: 'Review' 
    },
    articles: [{
        type: mongoose.Types.ObjectId,
        ref: 'Article'
    }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;