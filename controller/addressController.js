const addressService = require('../services/addressService');

exports.addAddress = async (req,res) => addressService.addAddress(req,res);
exports.getAddressById = async (req,res)=> addressService.getAddressById(req,res);
exports.getAddress= async (req,res)=> addressService.getAddress(req,res);
exports.updateAddress = async (req,res)=> addressService.updateAddress(req,res);
exports.deleteAddress = async (req,res)=> addressService.deleteAddress(req,res);

