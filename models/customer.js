const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    CustomerId : {
        type : Number,
    },
    Customer_Name : {
        type : String ,
        required : true
    },
    Email : {
        type : String,
        required: true,
        unique: true
    },
    Mobile_Number : {
        type : Number,
        required : true,
        unique : true
    },
    City : {
        type : String,
        required : true,
    }
});


module.exports = mongoose.model('Customer',CustomerSchema);
