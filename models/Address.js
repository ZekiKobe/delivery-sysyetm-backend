const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    country:{
        type:String,
        default:'Ethiopia'
    },
    region:{
        type:String
    },
    zone:{
        type:String
    },
    woreda:{
        type:String
    },
    kebele:{
        type:String
    },
    cityName:{
        type:String
    },
    houseNumber:{
        type:String
    },
    latitude:{
        type:Number,
        required:true
    },
    longitude:{
        type:Number,
        required:true
    }
});

module.exports =mongoose.model('Address',addressSchema)