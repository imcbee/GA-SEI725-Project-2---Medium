const mongoose = require('mongoose');
const models = require('.');

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
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;