const express = require('express');
const router = express.Router();
const vehicleController = require('../controller/vehicleController');

router.post('/addVehicle',vehicleController.addVehicle);
router.get('/vehicle/:id',vehicleController.getVehicleById);
router.get('/allVehicles',vehicleController.getAllVehicles);
router.put('/update-vehicle',vehicleController.updateVehicle);