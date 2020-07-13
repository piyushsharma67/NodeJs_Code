const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const AuthDetails=require('../models/Details');
const StudentDetails=require('../models/student_login_db');

const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

router.post('/',(req,res,next)=>{
    email=req.body.email;
    password=req.body.password;
    AuthDetails.findOne({"email":email},(err,result)=>{
        if (err) throw err;
        else{
            if(result){
                res.status(401).json({
                    "message":"Invalid credentials"
                });
            }else{
                bcrypt.hash(password,10,(err,hash)=>{
                    if (err) throw err;
                    else{
                        let details=new AuthDetails({
                            email:email,
                            password:hash,
                            name:req.body.name
                            
                        });
                        details.save((err,isSaved)=>{
                            if (err) throw err;
                            else{
                                if(isSaved){
                                    res.status(200).json({
                                        "message":"Credentials saved"
                                    });

                                }else{
                                    res.json({
                                        "message":"error occured"
                                    });
                                }
                            }
                        });
                        
                    }

                });
            }
        }

    });

});

router.post('/student_login',(req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;
    StudentDetails.find({"email":email},(err,result)=>{
        console.log(result);
        if (err) throw err;
        else{
            if(result.length>1){
                res.status(401).json({
                    "message":"Authentication Failed"
                });
            }else{
                bcrypt.hash(password,10,(err,hash)=>{
                    if (err) throw err;
                    else{
                        const studentDetails=new StudentDetails({
                            email:email,
                            password:hash,
                            name:req.body.name
 
                        });
                        studentDetails.save((err,issaved)=>{
                            if (err) throw err;
                            else
                            {
                                if (issaved){
                                    res.status(200).json({
                                        "message":"student login credential saved"
                                    });
                                }else{
                                    res.json({
                                        "message":"Error occurred while saving data"
                                    });
                                }
                            }
                        });
                    }
                });
            }

        }

    });
    
});

module.exports=router;