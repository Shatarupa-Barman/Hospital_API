// Require the Express.js framework
const express = require('express');

// Create a router using the Express Router
const router = express.Router();

// Require the "patientsController" module
const patientsController = require("../controllers/patients_Controller");

// Require Passport for authentication
const passport = require('passport');



// Route for registering a patient and Authentication with JWT is required for this route
router.post('/register', passport.authenticate('jwt', { session: false }), patientsController.registerPatient);

// Route for creating a report for a patient by their ID and Authentication with JWT is required for this route
router.post('/:id/create_report', passport.authenticate('jwt', { session: false }), patientsController.createReport);

// Route for retrieving all reports for a patient by their ID and Authentication with JWT is required for this route
router.get('/:id/all_reports', passport.authenticate('jwt', { session: false }), patientsController.allReports);

// Export the patients router to be used by the main router
module.exports = router;
