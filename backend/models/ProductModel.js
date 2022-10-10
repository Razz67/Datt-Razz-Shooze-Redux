const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please add a name"],
		trim: true,
		maxlength: [20, "Name cannot be more than 20 characters"],
	},
	description: {
		type: String,
		required: [true, "Please add a description"],
		maxlength: [4000, "Description cannot be more than 4000 characters"],
	},
	price: {
		type: Number,
		required: [true, "Please add a price"],
		maxlength: [10, "Price cannot be more than 10 characters"],
	},
	discountPrice: {
		type: Number,
		required: [true, "Please add a discount price"],
		maxlength: [4, "Discount Price cannot be more than 4 characters"],
	},
	color: {
		type: String,
	},
	size: {
		type: String,
	},
	rating: {
		type: Number,
		default: 0,
	},
	images: [
		{
			public_id: {
				type: String,
				required: true,
			},
			url: {
				type: String,
				required: true,
			},
		},
	],
	category: {
		type: String,
		required: [true, "Please add a product category"],
	},
	stock: {
		type: Number,
		required: [true, "Please add a stock"],
		maxlength: [6, "Stock cannot be more than 6 characters"],
	},
	numOfReviews: {
		type: Number,
		default: 0,
	},
	reviews: [
		{
			user: {
				type: mongoose.Schema.ObjectId,
				ref: "User",
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			rating: {
				type: Number,
				required: true,
			},
			comment: {
				type: String,
			},
			time: {
				type: Date,
				default: Date.now(),
			},
		},
	],
	user: {
		type: mongoose.Schema.ObjectId,
		ref: "User"
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model("Product", ProductSchema);
