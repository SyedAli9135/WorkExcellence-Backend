const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017")
  .then((result) => {
    console.log("Database Connectivity Successfull");
  })
  .catch((err) => {
    console.log("Connectivity Error:", err);
  });
