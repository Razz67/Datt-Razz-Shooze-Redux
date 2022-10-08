const Product = require("../models/ProductModel");

// Create product

// Get all products
exports.getAllProducts = (req, res) => {
	res.status(200).json({
		message: "Route is working Now",
	});
};

// Create product
exports.createProduct = async (req, res, next) => {
	const product = await Product.create(req.body);

	res.status(201).json({
		success: true,
		product,
	});
	console.log("Product created successfully");
};
