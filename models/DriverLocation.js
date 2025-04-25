const mongoose = require('mongoose');

const driverLocationSchema =new mongoose.Schema({
    driverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    latitude:{
        type:Number,
        required:true
    },
    longitude:{
        type:Number,
        required:true
    },
    locationName:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now,
        required:true
    },
    updatedAt:{
        type:Date,
        required:true
    }
});

module.exports = mongoose.model('DriverLocation',driverLocationSchema);