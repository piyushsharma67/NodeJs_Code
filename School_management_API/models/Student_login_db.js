const express=require('express');
const mongoose=require('mongoose');

const studentdetailsSchema=mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    name:{type:String,required:true},
    student:{type:Boolean,default:true}
    
});


module.exports=mongoose.model('Student_Login_Details',studentdetailsSchema);