// Require necessary models
const Patient = require('../models/patient');
const Report = require('../models/report');
const Doctor = require('../models/doctor');

// Controller function for patient registration
module.exports.registerPatient = async function (req, res) {
    try {
        // Check if a patient with the same phone number already exists
        let patient = await Patient.findOne({ phone_number: req.body.phone_number });

        if (patient) {
            console.log(patient);
            // If a patient with the same phone number exists, return a response indicating it
            return res.status(200).json({
                message: 'Patient Already Registered',
                data: patient
            });
        }

        // Create a new patient record in the database
        patient = await Patient.create(req.body);
        console.log(patient);

        // Return a success (201) response with the newly created patient data
        return res.status(201).json({
            message: 'Patient registered successfully',
            data: patient
        });

    } catch (error) {
        // Handle errors and return a 500 (Internal Server Error) response
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

// Controller function for creating a medical report for a patient
module.exports.createReport = async function (req, res) {
    try {
        // Find the patient by their ID
        const patient = await Patient.findById(req.params.id);
        console.log(patient);

        if (!patient) {
            // If the patient does not exist, return a 422 (Unprocessable Entity) response
            return res.status(422).json({
                message: "Patient Does not exist"
            });
        }

        // Create a new report record in the database
        let report = await Report.create({
            createdByDoctor: req.user.id, //req.user contains the authenticated doctor's information
            patient: req.params.id,
            status: req.body.status,
            date: new Date()
        });
        console.log(report);

        // Update the patient's reports array with the newly created report and save it
        patient.reports.push(report);
        patient.save();

        // Return a success (201) response with the newly created report data
        return res.status(201).json({
            message: 'Report created successfully',
            data: report
        });

    } catch (error) {
        // Handle errors and return a 500 (Internal Server Error) response
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

// Controller function for retrieving all reports for a patient
module.exports.allReports = async function (req, res) {
    try {
        // Find all reports associated with the patient ID and populate createdByDoctor
        const reports = await Report.find({ patient: req.params.id }).populate('createdByDoctor').sort('date');
        console.log(reports);

        // Format the report data 
        const reportData = reports.map(report => {
            const originalDate = report.date;
            const dateObj = new Date(originalDate);

            const formattedDate = dateObj.toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            });

            return {
                createdByDoctor: report.createdByDoctor.name,
                status: report.status,
                date: formattedDate
            };
        });

        // Return a success (200) response with the formatted report data
        return res.status(200).json({
            message: `List of Reports of Patient with id - ${req.params.id}`,
            reports: reportData
        });

    } catch (error) {
        // Handle errors and return a 500 (Internal Server Error) response
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}
