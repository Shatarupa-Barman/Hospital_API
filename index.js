// Import the required modules
const express = require('express'); // Import the Express.js framework
const bodyParser = require('body-parser'); // Middleware for parsing request bodies
const db = require('./config/mongoose'); // Database configuration
const passport = require('passport'); // Passport for authentication
const passportJWT = require('./config/passport-jwt-strategy'); // Passport strategy for JWT authentication

// Create an Express application
const app = express();

// Start the server on a specific port
const port = 8000;

// Parse application/x-www-form-urlencoded requests
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json requests
app.use(bodyParser.json());

// Import and use routes defined in the './routes' module
app.use('/', require('./routes'));

// Start the server and listen on the specified port
app.listen(port, (err) => {
    if (err) {
        console.log(`Server is giving an error: ${err}`);
    } else {
        console.log(`Server is running on port: ${port}`);
    }
});
