const Product = require("../models/ProductModel");
const Features = require("../utilities/features");

// Custom Error Handlers
// const ErrorHandler = require("../utilities/ErrorHandler");
// const catchAsyncErrors = require("../middleware/catchAsyncErrors"); 

// Create A product
// exports.createProduct = catchAsyncErrors(async (req, res, next) => {
	exports.createProduct = async (req, res, next) => {
	const product = await Product.create(req.body);

	res.status(201).json({
		success: true,
		product,
	});
	console.log("Product created successfully");
};

// Get all products
// exports.getAllProducts = catchAsyncErrors(async (req, res) => {
	exports.getAllProducts = async (req, res) => {

	const resultPerPage = 10;
	let productCount = await Product.countDocuments(); // shown in dashboard
		const feature = new Features(Product.find(), req.query)
		.search()
		.filter()
		.pagination(resultPerPage)

	const products = await feature.query;
	res.status(200).json({
		success: true,
		count: products.length,
		products,
		
	});
	console.log("Products fetched successfully");
};

// Update product
// exports.updateProduct = catchAsyncErrors(async (req, res) => {
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
};

// Delete product
// exports.deleteProduct = catchAsyncErrors(async (req, res) => {
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
};

// Get One Product
// exports.getOneProduct = catchAsyncErrors(async (req, res, next) => {
	exports.getOneProduct = async (req, res, next) => {
	const product = await Product.findById(req.params.id);
	if (!product) {
		return res.status(500).json({
			success: false,
			message: "Product not found",
		});
		// return next(new ErrorHandler("Product not found", 404));
	}
	res.status(200).json({
		success: true,
		message: "Product fetched successfully",
		product,
		productCount
	});
	console.log("Product fetched successfully");
};