const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./db/Database.js");


// Config
dotenv.config({ 
    path: "backend/config/.env" 
});

// Connect to database
connectDatabase();


    

// Create server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
})