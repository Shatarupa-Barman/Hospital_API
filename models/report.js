// Require the Mongoose library
const mongoose = require('mongoose');

// Define a Mongoose schema for the "Report" model
const reportSchema = new mongoose.Schema({  
  createdByDoctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  }, 
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient'
  },  
  status: {
    type: String,
    required: true,
    enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']
  },  
  date: {
    type: Date,
    required: true
  }
}, {  
  timestamps: true
});

// Create a Mongoose model named "Report" using the defined schema
const Report = mongoose.model('Report', reportSchema);

// Export the "Report" model for use in other parts of the application
module.exports = Report;
