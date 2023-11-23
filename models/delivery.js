const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
    },
    
    borrowDate: {
        type:Date,
        default: Date.now,
    },

    returnDate: Date,
    address:String,

    latitude:Number,
    longitude: Number,

    status: {
        type: String,
        enum: ['0processing', '1dispatched', '2enroute', '3delivered', '4toPickup', '5pickedUp', '6returning', '7returned'],
        default: '0processing',       

    }

});

const Delivery = mongoose.model("Delivery", deliverySchema);

module.exports = Delivery;