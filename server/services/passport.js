const passport = require("passport");
const User = require("../models/User");
const config = require("../config/config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret,
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // See if user ID in payload exists in our db
  // If true, call 'done' with that user
  // If false, call done without a user object

  try {
    const user = User.query().findById(payload.sub);
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (err) {
    done(err, false);
  }
});

// Tell Passport to use this strategy
passport.use(jwtLogin);
// passport.use(localLogin);
