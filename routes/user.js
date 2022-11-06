const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
router.get("", UserController.getUsers);
router.post("/signup", UserController.signup);
router.post("/signin", UserController.signin);

module.exports = router;
