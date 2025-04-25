const mongoose = required('mongoose');

const deliverySchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    pickUpAddressId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Address',
        required:true
    },
    dropOffAddressId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Address',
        required:true
    },
    driverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:String,
        enum:['pending','assigned','in-transit','delivered','cancelled'],
        required:true
    },
    deliveryType:{
        type:String,
        enum:['normal','express','urgent','same-day'],
        required:true
    },
    estimatedDeliveryTime:{
        type:Date,
        required:true
    },
    deliveredTime:{
        type:Date,
        required:true
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

module.exports = mongoose.model('Delivery',deliverySchema)