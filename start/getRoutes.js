const express = require("express");
const path = require("path");
const userRoutes = require("../routes/user");
const workSystemRoutes = require("../routes/workSystem");

const getRoutes = (app) => {
  // Main Middlewares
  app.use(express.static(path.join(__dirname, "public")));
  app.use(express.json());

  // Routes Usage
  app.use("/users", userRoutes);
  app.use("/worksystem", workSystemRoutes);
};

module.exports = getRoutes;
