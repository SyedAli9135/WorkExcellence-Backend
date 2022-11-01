const express = require("express");
const router = express.Router();
const workDirectionController = require('../controllers/workDirectionController');

router.post('/add', workDirectionController.addWorkDirection);
router.get('/get', workDirectionController.getWorkDirection);
router.post('/update/:workdirectionid', workDirectionController.updateWorkDirection);

module.exports = router