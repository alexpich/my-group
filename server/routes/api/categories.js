const express = require("express");
const router = express.Router();
const Category = require("../../models/Category");

router.get("/", async (req, res) => {
  const categories = await Category.query();
  res.json(categories);
});

module.exports = router;
