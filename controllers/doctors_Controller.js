// Require the "Doctor" model and the "jsonwebtoken" library
const Doctor = require("../models/doctor");
const jwt = require('jsonwebtoken');

// Controller function for doctor registration
module.exports.registerDoctor = async function (req, res) {
    try {
        // Check if a doctor with the same username already exists
        let doctor = await Doctor.findOne({ username: req.body.username });

        if (doctor) {
            console.log(doctor);
            // If a doctor with the same username exists, return a conflict (409) response
            return res.status(409).json({
                message: 'Doctor Already Exists',
                data: doctor
            });
        }

        // Create a new doctor record in the database
        doctor = await Doctor.create(req.body);
        console.log(doctor);

        // Return a success (201) response with the newly created doctor data
        return res.status(201).json({
            message: 'Doctor registered successfully',
            data: doctor
        });

    } catch (error) {
        // Handle errors and return a 500 (Internal Server Error) response
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

// Controller function for doctor login
module.exports.login = async function (req, res) {
    try {
        // Find a doctor by their username
        let doctor = await Doctor.findOne({ username: req.body.username });
        console.log(doctor);

        // Check if the doctor does not exist or the password does not match
        if (!doctor || doctor.password != req.body.password) {
            // Return a 422 (Unprocessable Entity) response for invalid username or password
            return res.status(422).json({
                message: "Invalid UserName or Password"
            });
        }

        // Generate a JWT token for the authenticated doctor
        const token = jwt.sign(doctor.toJSON(), 'secretkey', { expiresIn: '1000000' });

        // Return a success (200) response with the JWT token
        return res.status(200).json({
            message: "Sign in successful. Here is your token, please keep it safe",
            data: {
                token: token
            }
        });

    } catch (error) {
        // Handle errors and return a 500 (Internal Server Error) response
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}
