const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
router.get("", UserController.getUsers);
router.post("/add", UserController.postAddUsers);

module.exports = router;
