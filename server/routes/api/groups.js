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

// POST one new group
router.post("/create", async (req, res, next) => {
  const { group_name, image_url, category_id, user_id } = req.body;
  try {
    const group = await Group.query().insert({
      group_name,
      image_url,
      category_id,
      user_id,
    });
    res.json(group);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
