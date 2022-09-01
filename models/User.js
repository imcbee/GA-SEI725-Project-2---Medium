const mongoose = require('mongoose');


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
        default:
            "https://picsum.photos/200/300.jpg",
    }, 
    reviews: { 
        type: mongoose.Types.ObjectId, 
        ref: 'Review' 
    },
    articles: {
        type: mongoose.Types.ObjectId,
        ref: 'Article'
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;