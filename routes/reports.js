// Require the Express.js framework
const express = require('express');

// Create a router using the Express Router
const router = express.Router();

// Require the "reportsController" module
const reportsController = require("../controllers/reports_Controller");

// Require Passport for authentication
const passport = require('passport');



// Route for retrieving reports by status and Authentication with JWT is required for this route
router.get('/:status', passport.authenticate('jwt', { session: false }), reportsController.status);

// Export the reports router to be used by the main router
module.exports = router;
