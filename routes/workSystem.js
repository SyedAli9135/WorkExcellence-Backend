const express = require("express");
const verifyToken = require("../middlewares/auth");
const router = express.Router();
const WorkSystemController = require("../controllers/workSystemController");
router.get("/", WorkSystemController.getWorkSystem);
router.get(
  "/worksystemuser",
  verifyToken,
  WorkSystemController.getWorkSystemByUser
);
router.post("/add", verifyToken, WorkSystemController.postAddWorkSystem);
router.post(
  "/update/:worksystemid",
  verifyToken,
  WorkSystemController.updateWorkSystem
);
router.post(
  "/delete/:worksystemid",
  verifyToken,
  WorkSystemController.deleteWorkSystem
);
module.exports = router;
