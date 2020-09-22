const passport = require("passport");
const User = require("../models/User");
const config = require("../config/config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

// Create local strategy
const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, async function (
  email,
  password,
  done
) {
  // Verify email and password, call done with user if it is correct email and password
  // otherwise, call done with false
  try {
    const user = await User.query().findOne({ email: email });

    if (!user) {
      return done(null, false);
    }

    // compare passwords - is 'password' equal to user.password?
    user.comparePassword(password, function (err, isMatch) {
      if (err) {
        return done(err);
      }
      if (!isMatch) {
        return done(null, false);
      }
      return done(null, user);
    });
  } catch (err) {
    return done(err);
  }
});

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret,
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, async function (payload, done) {
  // See if user ID in payload exists in our db
  // If true, call 'done' with that user
  // If false, call done without a user object

  try {
    const user = await User.query().findById(payload.sub);
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
passport.use(localLogin);
