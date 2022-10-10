const express = require("express");

// Bring in controllers
const {
	createProduct,
	getAllProducts,
	updateProduct,
	deleteProduct,
	getOneProduct,
} = require("../controller/ProductController");

// Create router
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/new").post(createProduct);

router
    .route("/product/:id")
    .delete(deleteProduct)
    .put(updateProduct)
    .get(getOneProduct);
    




// Export router
module.exports = router;
