const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/UserController');
// const ErrorHandler = require("../utilities/ErrorHandler");


router.route("/registration").post(registerUser);


module.exports = router;