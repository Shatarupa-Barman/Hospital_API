// Require the Mongoose library
const mongoose = require('mongoose');

// Define a Mongoose schema for the "Doctor" model
const doctorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

// Create a Mongoose model named "Doctor" using the defined schema
const Doctor = mongoose.model('Doctor', doctorSchema);

// Export the "Doctor" model for use in other parts of the application
module.exports = Doctor;
