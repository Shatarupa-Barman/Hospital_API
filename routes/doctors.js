// Require the Express.js framework
const express = require('express');

// Create a router using the Express Router
const router = express.Router();

// Require the "doctorsController" module
const doctorsController = require("../controllers/doctors_Controller");



// Route for registering a doctor
router.post('/register', doctorsController.registerDoctor);

// Route for logging in a doctor
router.post('/login', doctorsController.login);

// Export the router to be used in other parts of the application
module.exports = router;
