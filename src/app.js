const express = require("express");
require("./start/dbConnect");
const getRoutes = require("./start/getRoutes");

const app = express();
getRoutes(app);

app.listen(3000, () => console.log("Server Started"));
