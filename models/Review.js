const mongoose = required('mongoose');

const reviewSchema = new mongoose.Schema({
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
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    comment:{
        type:String,
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

module.exports = mongoose.model('Review',reviewSchema);