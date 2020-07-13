const express=require('express');
const mongoose=require('mongoose');


const studentSchema=new studentSchema({
    name:{type:Schema.Types.ObjectId,required:true},
    age:{type:Number,required:true},
    parent_name:{type:String,required:true},
    contact_number:{type:Number,required:true},
    email:{type:String,required:true},
    class:{type:String,required:true},
});
 

module.exports=mongoose.model('Student',studentschema);
