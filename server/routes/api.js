const express = require("express");
const app = express();

// Require router files
const usersRoutes = require("./api/users");
const categoriesRoutes = require("./api/categories");
const groupsRoutes = require("./api/groups");

// Include the routes to express
app.use("/users", usersRoutes);
app.use("/categories", categoriesRoutes);
app.use("/groups", groupsRoutes);

module.exports = app;
