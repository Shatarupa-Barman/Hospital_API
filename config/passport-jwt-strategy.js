// Require the necessary modules
const passport = require('passport'); // Passport for authentication
const JwtStrategy = require('passport-jwt').Strategy; // JWT Strategy for Passport
const ExtractJwt = require('passport-jwt').ExtractJwt; // Extract JWT from requests

// Require the Doctor model (assuming it's in a parent directory)
const Doctor = require('../models/doctor');

// Define options for JWT strategy
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); // Extract JWT from the Authorization header
opts.secretOrKey = 'secretkey'; // Secret key for decoding the JWT

// Create a new JWT strategy for Passport
passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    try {
        // Attempt to find a doctor in the database based on the JWT payload's "id" field
        const user = await Doctor.findOne({ id: jwt_payload.id });

        // If a user is found, return the user to Passport
        if (user) {
            return done(null, user);
        } else {
            // If no user is found, return "false" to indicate no user authentication
            return done(null, false);
        }
    } catch (err) {
        // If an error occurs during database query, return the error to Passport
        return done(err, false);
    }
}));

// Export the configured Passport instance for use in other parts of the application
module.exports = passport;
