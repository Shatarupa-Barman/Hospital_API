// Require the Mongoose library
const mongoose = require('mongoose');

// Define a Mongoose schema for the "Patient" model
const patientSchema = new mongoose.Schema({  
  phone_number: {
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
  },  
  reports: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Report',
    }
  ]
}, {
    timestamps: true
});

// Create a Mongoose model named "Patient" using the defined schema
const Patient = mongoose.model('Patient', patientSchema);

// Export the "Patient" model for use in other parts of the application
module.exports = Patient;
