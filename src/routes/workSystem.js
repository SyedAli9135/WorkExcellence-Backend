const express = require("express");
const addWorkSystem = require("../controllers/work-system/addWorkSystem");
const getWorkSystem = require("../controllers/work-system/getWorkSystem");

const router = express.Router();

router.get("/", getWorkSystem);
router.post("/add", addWorkSystem);

exports.workSystemRoutes = router;
