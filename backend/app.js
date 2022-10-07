const express = require('express');
const app = express();

app.use(express.json());

// Import all routes
const product = require('./routes/ProductRoute');

app.use('/api/v1', product);

// console.log(process.env.MONGO_DB);

module.exports = app;