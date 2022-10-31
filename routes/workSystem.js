const express = require("express");
const router = express.Router();
const WorkSystemController = require("../controllers/workSystem");
router.get("/", WorkSystemController.getWorkSystem);
router.get("/worksystemuser/:userid", WorkSystemController.getWorkSystemByUser);
router.post("/add", WorkSystemController.postAddWorkSystem);
router.post("/update/:worksystemid", WorkSystemController.updateWorkSystem);
router.post("/delete/:worksystemid", WorkSystemController.deleteWorkSystem);
module.exports = router;
