const express = require("express");
const path = require("path");
const userRoutes = require("../routes/user");
const workSystemRoutes = require("../routes/workSystem");
const workDirectionRoutes = require('../routes/workDirection');
const workMeasurementRoutes = require('../routes/workMeasurement')
const getRoutes = (app) => {
  // Main Middlewares
  app.use(express.static(path.join(__dirname, "public")));
  app.use(express.json());

  // Routes Usage
  app.use("/users", userRoutes);
  app.use("/worksystem", workSystemRoutes);
  app.use("/workdirection", workDirectionRoutes);
  app.use("/workmeasurement", workMeasurementRoutes)
};

module.exports = getRoutes;
