const express = require("express");
const app = express();
const cloudinary = require("cloudinary").v2;
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;

let corsOptions = {
  origin: "http://localhost:3000",
};

// Get the router files
const apiRoutes = require("./routes/api");

/**
 * Middlewares
 */
app.use(cors(corsOptions));

// Accept JSON data
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Knex
const Knex = require("knex");
const knexFile = require("./knexfile");
const knex = Knex(knexFile.development);
const { Model } = require("objection");
Model.knex(knex);

// Include the routes to express
app.use("/api", apiRoutes);

/**
 * Cloudinary Configuration
 */
const cloudinaryDetails = require("./config/cloudinary_config");

cloudinary.config({
  cloud_name: cloudinaryDetails.cloud_name,
  api_key: cloudinaryDetails.api_key,
  api_secret: cloudinaryDetails.api_secret,
});

/**
 * Error Handlers
 */
const { errorHandler } = require("./helpers/error");
app.use((err, req, res, next) => {
  errorHandler(err, res);
});

// app.listen(port, () => console.log(`Server listening on port ${port}`));
const server = app.listen(port, (error) => {
  if (error) {
    console.log("Error running Express");
  }
  console.log("Server is running on port: ", server.address().port);
});
