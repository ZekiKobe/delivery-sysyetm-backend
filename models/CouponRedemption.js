const mongoose = required('mongoose');

const couponRedemptionSchema = new mongoose.Schema({
    couponId:{
        type:mongoose.Schena.Types.ObjectId,
        ref:'Coupon',
        required:true
    },
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
    couponCode:{
        type:String,
        required:true
    },
    redempdedAt:{
        type:Date,
        default:Date.now,
        required:true
    }
});

module.exports = mongoose.model('CouponRedemption',couponRedemptionSchema);