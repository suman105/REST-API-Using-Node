const mongoose = require('mongoose');

const ShippingSchema = mongoose.Schema({
    Email : {
        type : String,
        required: true,
    },
    Address : {
        type : String ,
        required : true
    },
    City : {
        type : String,
        required : true
    },
    Pincode : {
        type : Number,
        required : true,
    },
    Purchase_Id : {
        type : String
    },
    Customer_Id : {
        type : String
    }
});


module.exports = mongoose.model('Shipping',ShippingSchema);
