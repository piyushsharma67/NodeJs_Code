const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

const holidayDestination=require('../holidayConroller/Destination');


mongoose.connect('mongodb://localhost:27017', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use('/holidays')


module.exports=app;


