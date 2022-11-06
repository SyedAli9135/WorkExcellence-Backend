const express = require("express");
const getRoutes = require("./start/getRoutes");
const dotenv = require("dotenv");
dotenv.config();
// Database Connectivity
require("./start/dbConnect");

const app = express();

getRoutes(app);

app.listen(3000, () => {
  console.log("Server Started");
});
