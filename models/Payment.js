const mongoose = required('mongoose');

const paymentSchema =new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    deliveryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Delivery',
        required:true
    },
    paymentAmount:{
        type:Number,
        required:true
    },
    paymentMethod:{
        type:String,
        enum:['cash','bank transfer','wallet'],
        required:true
    },
    paymentStatus:{
        type:String,
        enum:['pending','completed','failed'],
        required:true
    },
    transactionId:{
        type:String,
        required:true
    },
    payedAt:{
        type:Date,
        default:Date.now,
        required:true
    }
});

module.exports = mongoose.model('Payment',paymentSchema);