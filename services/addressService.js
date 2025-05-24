const Address = require('../models/Address');
exports.addAddress = async (req, res) => {
    const {
      userId,
      country,
      region,
      zone,
      woreda,
      kebele,
      cityName,
      houseNumber,
      latitude,
      longitude
    } = req.body;
  
    try {
      const newAddress = await Address.create({
        userId,
        country,
        region,
        zone,
        woreda,
        kebele,
        cityName,
        houseNumber,
        latitude,
        longitude
      });
  
      console.log(newAddress);
  
      res.status(201).json({ message: "Address registered successfully...", data: newAddress });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  


exports.getAddressById= async(req,res)=>{
    const {id}=req.params;
    try {
        const address= await Address.findById(id);
        if(!address){
            return res.status(404).json({message:'Address not found'});
        }
        res.status(200).json(address);

        
    } catch (error) {
        res.status(500).json({message:'Internal server error'});
    
    }
}

exports.getAddress= async(req,res)=>{
    try {
        
        const address= await Address.find();
        if(!address){
            return res.status(404).json({message:'Address not found'});  
        }
        res.status(200).json(address);
    } catch (error) {
        
    }

}
exports.updateAddress = async (req, res) => {
    const { id } = req.params;
    const {
      userId,
      country,
      region,
      zone,
      woreda,
      kebele,
      cityName,
      houseNumber,
      latitude,
      longitude
    } = req.body;
  
    try {
      const updatedData = {
        userId,
        country,
        region,
        zone,
        woreda,
        kebele,
        cityName,
        houseNumber,
        latitude,
        longitude
      };
  
      const address = await Address.findByIdAndUpdate(id, updatedData, { new: true });
  
      if (!address) {
        return res.status(404).json({ message: 'Address not found' });
      }
  
      res.status(200).json({ message: 'Address updated successfully.', data: address });
    } catch (error) {
      console.error(error); // helpful for debugging
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  

exports.deleteAddress = async()=>{
    const {id}=req.params;
    try {
        const address= await Address.findByIdAndDelete(id);
        if(!address){
            return res.status(404).json({message:'Address not found'});
        } 
        res.status(200).json({message:'Address deleted successfully...'});       
    } catch (error) {
       res.status(500).json({message:'Internal server error'}); 
    }

}