// Require the "Report" model
const Report = require('../models/report');

// Controller function for retrieving reports by status
module.exports.status = async function(req, res) {
    try {
        // Find a single report with the given status
        const report = await Report.findOne({ status: req.params.status });
        console.log(report);

        // Check if a report with the specified status was found
        if (!report) {
            // If not found, return a 404 (Not Found) response
            return res.status(404).json({
                message: `No reports found with status ${req.params.status}`
            });
        }

        // Return a success (200) response with the report data
        return res.status(200).json({
            message: `List of Reports with status ${req.params.status}`,
            reports: report
        });

    } catch (error) {
        // Handle errors and return a 500 (Internal Server Error) response
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}
