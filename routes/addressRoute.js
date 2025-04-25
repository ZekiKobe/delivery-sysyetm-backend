const express = require('express');
const router = express.Router();
const addressController = require('../controller/addressController');

router.post('/add-address',addressController.addAddress);

module.exports = router;