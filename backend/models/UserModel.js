const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        minlenght: [3, 'Name must be at least 3 characters long'],
        maxlength: [20, 'Name must not exceed 20 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [, 'Password must be at least 8 characters long'],
        select: false
    },
    avatar: {
    public_id: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    },
    role: {
        type: String,
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordTime: Date
});

module.exports = mongoose.model('User', userSchema);
