const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoConfig = require("./config");
const ErrorHandler = require("./middleware/error");


// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));


// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
	console.log(`ERROR: ${err.message}`);
	console.log("Shutting down due to uncaught exception");
	process.exit(1);
});



// Config
require("dotenv").config();


// Import all routes
const product = require("./routes/ProductRoute");
const user = require("./routes/UserRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);

// Identify the port
const port = process.env.PORT;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

// Connect to database
mongoConfig();

// Unhancdled promise rejections
process.on("unhandledRejection", (err, promise) => {
	console.log(`Shuttin down sever for: ${err.message}`);
	console.log(`Shutting Down server: ${err}`);

	// Close server & exit process
	server.close(() => process.exit(1));
});


app.use(ErrorHandler);