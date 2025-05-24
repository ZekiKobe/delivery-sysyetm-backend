const vehicleService = require('../services/vehicleService');

exports.addVehicle = async (req,res) => vehicleService.addVehicle(req,res);
exports.updateVehicle = async (req,res) => vehicleService.updateVehicle(req,res);
exports.getAllVehicles = async (req,res) => vehicleService.getAllVehicles(req,res);
exports.getVehicleById = async (req,res) => vehicleService.getVehicleById(req,res);
exports.deleteVehicle = async (req,res) => vehicleService.deleteVehicle(req,res);