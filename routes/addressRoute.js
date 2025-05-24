const express = require('express');
const router = express.Router();
const addressController = require('../controller/addressController');

router.post('/addAddress',addressController.addAddress);
router.get('/getAddress/:id',addressController.getAddressById);
router.get('/getAllAdress',addressController.getAddress);
router.put('/updateAddress/:id',addressController.updateAddress);
router.delete('/deleteAddress/:id',addressController.deleteAddress);

module.exports = router;