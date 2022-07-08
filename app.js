const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


app.use(bodyParser.json());

const postrouter = require('./routes/posts');

app.use('/',postrouter);

//Database Connection
mongoose.connect("mongodb+srv://root:admin@cluster0.9lv6luz.mongodb.net/project?retryWrites=true&w=majority",()=>console.log("Connected to DB"));


app.listen(3000,()=>{
    console.log("Listening to port 3000!");
});