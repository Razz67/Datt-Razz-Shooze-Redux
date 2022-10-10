const express = require("express");
const mongoConfig = require("./config");
const ErrorHandler = require("./middleware/error");

// Config
require("dotenv").config();

// App
const app = express();

// Import all routes
const products = require("./routes/ProductRoute");

// Middleware
app.use(express.json());
app.use("/api/v1", products);
app.use(ErrorHandler);

// Identify the port
const port = process.env.PORT;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

// Connect to database
mongoConfig();
