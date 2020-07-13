const express=require('express');
const mongoose=require('mongoose');

const detailsSchema=mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    superuser:{type:Boolean,default:false,required:false},
    admin:{type:Boolean,default:true,required:false},
    name:{type:String,required:true},
    
});


module.exports=mongoose.model('Login_Details',detailsSchema);