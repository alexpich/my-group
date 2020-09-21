const express = require("express");
const router = express.Router();
const Category = require("../../models/Category");

// GET all Categories
router.get("/", async (req, res) => {
  const categories = await Category.query();
  res.json(categories);
});

// GET one Category by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const categories = await Category.query().findById(id);
  res.json(categories);
});

module.exports = router;
