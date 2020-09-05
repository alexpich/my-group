const express = require("express");
const app = express();

// Require router files
const categoriesRoutes = require("./api/categories");
const groupsRoutes = require("./api/groups");

// Include the routes to express
app.use("/categories", categoriesRoutes);
app.use("/groups", groupsRoutes);

module.exports = app;
