const express = require('express')
const router = express.Router()
const Customer = require('../models/customer');
const purchase = require('../models/purchase');
const Purchase = require('../models/purchase');
const Shipping = require('../models/shipping');


router.get('/customer', async (req,res)=>
{
  try {
    const employees = await Customer.find({}).exec();
    console.log(JSON.stringify(Object.assign({}, employees)));
    res.json((Object.assign({}, employees)));
  } catch (err) {
    res.json({message : "No Customers Found"});
  }
});

router.get('/shipping/city',async (req,res)=>{
   console.log(req.query);
   if((req.query['City']) == undefined){
      res.send("Please provide city as param");
   }
   else{
    try {
      let temp= {}
      const employees = await Customer.find({City : req.query['City']}).exec();
      
      for(let i=0;i<employees.length;i++){
        console.log(employees[i]);
        const shipping = await Shipping.find({ Customer_Id : employees[i]._id }).exec();
        temp[employees[i]['Email']] = (Object.assign({}, shipping));
      }
      //console.log(JSON.stringify(Object.assign({}, employees)));
      res.json(temp);
      
    } catch(er){
      console.log(er);
      res.json({message : "No Customers Found"});
    }
   }
})

router.get('/customer/purchase/shipment',async (req,res)=>{
  try {
      let temp= {}
      const employees = await Customer.find({}).exec();
      
      for(let i=0;i<employees.length;i++){
        console.log(employees[i]);
        const purchase = await Purchase.find({ CustomerId : employees[i]._id }).exec();
        
        if(purchase.length!=0){
          temp[employees[i]['Email']]={}
          temp[employees[i]['Email']]['purchaseOrder'] = [];
          for(let j=0;j<purchase.length;j++){
            const shipping = await Shipping.find({ Customer_Id : employees[i]._id, Purchase_Id : purchase[j]._id}).exec();
            console.log(shipping);
            temp[employees[i]['Email']]['purchaseOrder'].push(shipping[0]);
          }
        }
      }
      res.json(temp);
      
    } catch(er){
      console.log(er);
      res.json({message : "No Customers Found"});
    }
})


router.get('/customer/purchases',async (req,res)=>{
  try {
      let temp= {}
      const employees = await Customer.find({}).exec();
      
      for(let i=0;i<employees.length;i++){
        console.log(employees[i]);
        const shipping = await Purchase.find({ CustomerId : employees[i]._id }).exec();
        //console.log(shipping);
        temp[employees[i]['Email']] = (Object.assign({}, shipping));
      }
      //console.log(JSON.stringify(Object.assign({}, employees)));
      res.json(temp);
      
    } catch(er){
      console.log(er);
      res.json({message : "No Customers Found"});
    }
})


router.post('/customer', async (req, res) => {
      const newCustomer = new Customer({
        Customer_Name : req.body.Customer_Name,
        Email : req.body.Email,
        Mobile_Number: req.body.Mobile_Number,
        City : req.body.City
      }); 
    try{
        const savedcustomer = await newCustomer.save();
        res.json(savedcustomer);
    }catch(err)
    {
      res.json({message : err});
    }
});

router.post('/purchase', async (req, res) => {
try{
  const employees = await Customer.find({'Email' : req.body.Email}).exec();
  if(employees.length === 0) 
    res.json({'message' : 'Cutomer not found'});
  let result = employees[0];

  if(req.body.Pricing>req.body.MRP)
    res.json({'message' : 'Price cannot be greater than MRP'});
  const newPurchase = new Purchase({
    Email : req.body.Email,
    Product_Name : req.body.Product_Name,
    Quantity: req.body.Quantity,
    Pricing : req.body.Pricing,
    MRP : req.body.MRP,
    CustomerId : result['_id']
  }); 
    const savedPurchase = await newPurchase.save();
    res.json(savedPurchase);
}catch(err)
{
  res.json({message : 'result not found'});
}
});

router.post('/shipping',async (req,res)=>{
  const newShipping = new Shipping({
    Email : req.body.Email,
    Address : req.body.Address,
    City: req.body.City,
    Pincode : req.body.Pincode,
  });
  try{
    const savedShipping = await newShipping.save();
    res.json(savedShipping);
  }catch(err)
  {
    res.json({ message : err});
  }
});

router.get('/details', async (req,res)=>{
    try{
      const customerswithcity = await Customer.find();
      res.json(customerswithcity);
    } catch(err)
    {
      res.json({ message : err});
    }
});


module.exports = router