const addressService = require('../services/addressService');

exports.addAddress = async (req,res) => addressService.addAddress(req,res);
