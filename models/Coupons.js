const mongoose = require('mongoose');

const couponsSchema = new mongoose.Schema({
    couponCode:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    discountType:{
        type:String,
        enum:['percentage','fixed'],
        required:true
    },
    discountValue:{
        type:Number,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    usageLimt:{
        type:Number,
        required:true
    },
    minOrderAmount:{
        type:Number,
        required:true
    },
    maxDiscountAmount:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        required:true
    }
});

module.exports = mongoose.model('Coupons',couponsSchema);