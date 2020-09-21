const express = require("express");
const app = express();

// Require router files
const usersRoutes = require("./api/users");
const authRoutes = require("./api/auth");
const categoriesRoutes = require("./api/categories");
const groupsRoutes = require("./api/groups");

// Include the routes to express
app.use("/users", usersRoutes);
app.use("/auth", authRoutes);
app.use("/categories", categoriesRoutes);
app.use("/groups", groupsRoutes);

module.exports = app;
