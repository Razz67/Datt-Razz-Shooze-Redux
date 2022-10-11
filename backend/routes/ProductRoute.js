const express = require("express");

// Bring in controllers
const {
	createProduct,
	getAllProducts,
	updateProduct,
	deleteProduct,
	getOneProduct,
} = require("../controllers/ProductController");

// Create router
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/new").post(createProduct);

router
    .route("/product/:id")
    .put(updateProduct)
    .delete(deleteProduct)
    .get(getOneProduct);
    




// Export router
module.exports = router;
