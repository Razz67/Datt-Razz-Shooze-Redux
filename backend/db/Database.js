const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((data) => {
        console.log(`MongoDB Database connected with HOST: ${data.connection.host}`);

        mongoose.connection.on('error', (err) => {
            console.log(`MongoDB connection error: ${err.message}`);
        });
    })
};

module.exports = connectDatabase;