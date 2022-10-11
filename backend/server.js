const express = require("express");
const mongoConfig = require("./config");
// const ErrorHandler = require("./middleware/error"); // Expres has default error handling

// handling uncaught exceptions
// process.on("uncaughtException", (err) => {
//     console.log(`ERROR: ${err.message}`);
//     console.log("Shutting down due to uncaught exception");
//     process.exit(1);
// });




// Config
require("dotenv").config();

// App
const app = express();

// Import all routes
const products = require("./routes/ProductRoute");
const user = require("./routes/UserRoute");
// Middleware
app.use(express.json());
app.use("/api/v1", products);
app.use("/api/v1", user);


// app.use(ErrorHandler);  // Used for error handling but i think it is not needed

// Identify the port
const port = process.env.PORT;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

// Connect to database
mongoConfig();


// Unhancdled promise rejections (I think this is built in)
// process.on("unhandledRejection", (err, promise) => {
//     console.log(`Shuttin down sever for: ${err.message}`);
//     console.log(`Shutting Down server: ${err}`);

//     // Close server & exit process
//     server.close(() => process.exit(1));
// });