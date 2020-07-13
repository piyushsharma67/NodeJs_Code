const express=require('express');
const mongoose=require('mongoose');

const tourSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:[true,'a tour must have a name'],
        trim:true
    },
    price:{type:Number,
           required:[true,'a tour must have a price']},
    ratings:{type:Number,default:4.7},
    duration:{
        type:Number,
        required:[true,'a tour must have a duration']},
    maxGroupSize:{
        type:Number,
        required:[true,'a tour must have max number of people allowed']},
    minGroupSize:{
        type:Number,
        required:[true,'a tour must have a min number of people allowed']},
    ratingAvg:{
        type:Number,
        default:0
    },
    ratingQuantity:
    {
        type:Number,
        default:0
    },
    priceDiscount:Number,
    summary:{type:String,trim:true},
    description:{type:String,trim:true,required:[true,'a tour must have a description']},
    imageCover:{
        type:String,required:[true,'a tour must have a image']
    },
    image:[string],
    createdAt:{
        type:Date,
        default:Date.now()
    },
    startDates:[Date],

});

module.exports= mongoose.model('Tour',tourSchema);