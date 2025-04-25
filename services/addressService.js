const Address = require('../models/Address');

exports.addAddress = async (req,res) =>{
    const {id,country,region,zone,woreda,kebele,cityName,houseNumber,latitude,longitude} = req.body;

    try {
        const newAddress = new Address.create({
            id,
            country,
            region,
            zone,
            woreda,
            kebele,
            cityName,
            houseNumber,
            latitude,
            longitude
        })
        await newAddress.save();
        res.status(201).json({message:"Address registered successfully..."});
    } catch (error) {
        res.status(500).json({message:'Internal server error'});
    }
};