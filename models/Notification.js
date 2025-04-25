const mongoose = required('mongoose');

const notificationSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    title:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:['order','delivery','payment','review','system','other'],
        required:true
    },
    isRead:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now,
        required:true
    }
});

module.exports = mongoose.model('Notification',notificationSchema);