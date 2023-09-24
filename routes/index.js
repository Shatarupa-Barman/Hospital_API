// Require the Express.js framework
const express = require('express');

// Create a router using the Express Router
const router = express.Router();



// For routes related to doctors, use the 'doctors' router defined in './doctors'
router.use('/doctors', require('./doctors'));

// For routes related to patients, use the 'patients' router defined in './patients'
router.use('/patients', require('./patients'));

// For routes related to reports, use the 'reports' router defined in './reports'
router.use('/reports', require('./reports'));

// Export the main router to be used in other parts of the application
module.exports = router;
