const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const router = express.Router();
const User = require("../../models/User");
const jwt = require("jwt-simple");
const config = require("../../config/config");

// Passport Setup
const passportService = require("../../services/passport");
const passport = require("passport");
const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

// Test route
router.get("/", requireAuth, function (req, res) {
  res.send({ hi: "there" });
});

router.post("/signin", requireSignin, function (req, res, next) {
  // User has already had their email and pw auth'd, now we just need to give them a token
  res.send({ token: tokenForUser(req.user) });
});

router.post("/signup", async (req, res, next) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password!" });
  }

  // Check if user with given email exists
  try {
    const user = await User.query().findOne({ email: email });

    // If user with email does exist, return an error
    if (user) {
      return res.status(422).send({ error: "Email is already in use." });
    }
  } catch (err) {
    next(err);
  }

  // If user with email does NOT exist, create and save user record
  try {
    const salt = bcrypt.genSaltSync(10);

    const savedUser = await User.query().insert({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: bcrypt.hashSync(password, salt),
    });
    res.json({ token: tokenForUser(savedUser) });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
