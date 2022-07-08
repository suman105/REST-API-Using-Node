const mongoose = require('mongoose');

const PurchaseSchema = mongoose.Schema({
    Email : {
        type : String,
        required : true
    },
    Product_Name : {
        type : String ,
        required : true
    },
    Quantity : {
        type : Number,
        required : true,
    },
    Pricing : {
        type : Number,
        required : true,
    },
    MRP : {
        type : Number,
        required : true,
    },
    CustomerId : {
        type : String   
    }
    
});


module.exports = mongoose.model('Purchase',PurchaseSchema);
