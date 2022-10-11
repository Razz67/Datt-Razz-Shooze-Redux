const User = require("../models/UserModel");

// Custom Error Handlers
// const ErrorHandler = require("../utilities/ErrorHandler");
// const catchAsyncErrors = require("../middleware/catchAsyncErrors");


// Register a user => /api/v1/register
exports.registerUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id:"https://test.com",
            url:"https://test.com"
            }
    })
    res.status(201).json({
        success: true,
        user,
    })
    console.log("User created successfully");
};