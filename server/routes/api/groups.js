const express = require("express");
const router = express.Router();
const Group = require("../../models/Group");

// GET all Groups
router.get("/", async (req, res) => {
  const groups = await Group.query();
  res.json(groups);
});

// GET all Groups by Category ID
router.get("/category/:id", async (req, res) => {
  const { id } = req.params;
  const groups = await Group.query().where("category_id", id);
  res.json(groups);
});

// GET one Group by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const groups = await Group.query().findById(id);
  res.json(groups);
});

module.exports = router;
