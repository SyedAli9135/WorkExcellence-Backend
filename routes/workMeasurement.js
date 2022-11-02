const express = require("express");
const router = express.Router();
const workMeasurementController = require('../controllers/workMeasurementController');

router.post('/add', workMeasurementController.addWorkMeasurement);
router.get('/get', workMeasurementController.getWorkMeasurement);
router.post('/update/:WorkMeasurementid', workMeasurementController.updateWorkMeasurement);
router.post('/delete/:WorkMeasurementid', workMeasurementController.deleteWorkMeasurement);
module.exports = router




