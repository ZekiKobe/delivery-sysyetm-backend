const Vehicle = require('../models/Vehicles');

exports.addVehicle = async (req,res) =>{
    const {driverId,vehicleType,brand,vehicleModel,plateNumber,color,capacity} = req.body;
    try {
        const newVehicle = await Vehicle.create({
            driverId,
            vehicleType,
            brand,
            vehicleModel,
            plateNumber,
            color,
            capacity,
        });
        console.log(newVehicle);
        res.status(201).json({message:'Vehicle registered successfully...',data:newVehicle});
    } catch (error) {
        res.status(500).json({message:'Internal server error'});
    }
};

exports.getVehicleById = async (req,res) =>{
    const {id} = req.params;
    try {
        const vehicle = await Vehicle.findById(id);
        if(!vehicle){
            return res.status(404).json({message:'Vehicle not found'});
        }
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({message:'Internal server error'});
    }
 };

 exports.getAllVehicles = async (req,res) =>{
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({message:'Internal server error'});
    }
 };

 exports.updateVehicle = async (req,res) =>{
    const {id} = req.params;
    const {driverId,vehicleType,brand,vehicleModel,plateNumber,color,capacity} = req.body;
    try {
        const vehicle = await Vehicle.findById(id);
        if(!vehicle){
            return res.status(404).json({message:'Vehicle not found'});
        }
        const updatedVehicle = await Vehicle.findByIdAndUpdate(id,{
            driverId,
            vehicleType,
            brand,
            vehicleModel,
            plateNumber,
            color,
            capacity
        },{new:true});
        res.status(200).json({
            message:'Vehicle updated successfully',
            data:updatedVehicle
        });
    }
    catch (error) {
        res.status(500).json({message:'Internal server error'});
    }
};

exports.deleteVehicle = async (req,res) =>{
    const {id} = req.params;
    try {
        const vehicle = await Vehicle.findById(id);
        if(!vehicle){
            return res.status(404).json({message:'Vehicle not found'});
        }
        await Vehicle.findByIdAndDelete(id);
        res.status(200).json({
            message:'Vehicle deleted successfully'
        });
        }
     catch (error) {
        res.status(500).json({message:'Internal server error'});
    }
};