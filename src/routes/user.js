const express = require("express");
const addUser = require("../controllers/user/addUser");
const getUsers = require("../controllers/user/getUser");

const router = express.Router();

router.get("/", getUsers);
router.post("/add", addUser);

exports.userRoutes = router;
