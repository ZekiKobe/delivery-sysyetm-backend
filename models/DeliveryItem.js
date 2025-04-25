const mongoose = required('mongoose');

const deliveryItemSchema =new mongoose.Schema({
    deliveryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Delivery',
        required:true
    },
    itemName:{
        type:String,
        required:true
    },
    itemDescription:{
        type:String,
        required:true   
    },
    itemWeight:{
        type:Number,
        required:true
    },
    itemQuantity:{
        type:Number,
        required:true
    },
    itemPrice:{
        type:Number,
        required:true
    },
    itemImage:{
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


module.exports = mongoose.model('DeliveryItem',deliveryItemSchema);