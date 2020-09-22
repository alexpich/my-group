const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const router = express.Router();
const User = require("../../models/User");

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
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
