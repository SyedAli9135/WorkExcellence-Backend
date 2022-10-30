const express = require("express");
const router = express.Router();
const WorkSystemController = require("../controllers/workSystem");
router.get("/", WorkSystemController.getWorkSystem);
router.post("/add", WorkSystemController.postAddWorkSystem);

module.exports = router;
