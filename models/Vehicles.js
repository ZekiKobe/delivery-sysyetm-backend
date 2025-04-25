const mongoose = required('mongoose');

const vehicleSchema = new mongoose.Schema({
    driverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    vehicleType:{
        type:String,
        enum:['Car','Motorcycle','Bicycle','Truck'],
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    vehicleModel:{
        type:String,
        required:true
    },
    plateNumber:{
        type:String,
        unique:true
    },
    color:{
        type:String,
        required:true
    },
    capacity:{
        type:Number,
        required:true
    },
    registeredAt:{
        type:Date,
        default:Date.now,
        required:true
    },
    updatedAt:{
        type:Date,
        required:true
    }
});

module.exports = mongoose.model('Vehicle',vehicleSchema);