const express = require('express');
const { loginUser } = require('../controllers/UserController');
const router = express.Router();
const { registerUser } = require('../controllers/UserController');
// const ErrorHandler = require("../utilities/ErrorHandler");


router.route("/registration").post(registerUser);

router.route("/login").post(loginUser);


module.exports = router;