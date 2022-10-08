const express = require('express');
const { 
    getAllProducts,
    createProduct 
} = require('../controller/ProductController');
const router = express.Router();

// Get all products
router.route("/products")
.get(getAllProducts); 

// Create product
router
.route("/product/new")
.post(createProduct); 

// Export router
module.exports = router;