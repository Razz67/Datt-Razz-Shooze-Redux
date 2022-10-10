const Product = require("../models/ProductModel");

// Create A product
exports.createProduct = async (req, res, next) => {
	const product = await Product.create(req.body);

	res.status(200).json({
		success: true,
		product,
	});
	console.log("Product created successfully");
};

// Get all products
exports.getAllProducts = async (req, res) => {
	const products = await Product.find();
	res.status(200).json({
		success: true,
		count: products.length,
		products,
		
	});
	console.log("Products fetched successfully");
};

// Update product
exports.updateProduct = async (req, res) => {
	let product = await Product.findById(req.params.id);
	if (!product) {
		return res.status(500).json({
			success: false,
			message: "Product not found",
		});
	}
	product = await Product.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useUnified: false
	});
	res.status(200).json({
		success: true,
		product,
	});
	console.log("Product updated successfully");
}

// Delete product
exports.deleteProduct = async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (!product) {
		return res.status(500).json({
			success: false,
			message: "Product not found",
		});
	}
	await product.remove();
	res.status(200).json({
		success: true,
		message: "Product deleted successfully",
	});
	console.log("Product deleted successfully");
}

// Get One Product
exports.getOneProduct = async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (!product) {
		return res.status(500).json({
			success: false,
			message: "Product not found",
		});
	}
	res.status(200).json({
		success: true,
		message: "Product fetched successfully",
		product,
	});
	console.log("Product fetched successfully");
}