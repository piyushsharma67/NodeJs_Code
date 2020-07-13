const express=require('express');
const mongoose=require('mongoose');
const route=express.Router();
const bcrypt=require('bcrypt');
const details=require('../models/Details');
const jwt=require('jsonwebtoken');
const checkAuth=require('../middlewares/checkAuth')


// route.get('/',(req,res,next)=>{
//     email=req.body.email;
//     password=req.body.password;
//     details.findOne({"email":email},(err,result)=>{
//         if (err) throw err;
//         else{
//             if (result){
//                 bcrypt.compare(password,result.password,(err,match)=>{
//                     if (err) throw err;
//                     else{
//                         if (match){
//                             const token=jwt.sign({
//                                 email:result.email,
//                                 admin:result.admin,
//                                 name:result.name,
//                                 id:result._id
//                             },process.env.SECRET_KEY,
//                             {
//                                 expiresIn:"4h"
//                             });
//                             res.status(200).json({
//                                 "message":"Login Successful",
//                                 "token":token
//                             });
//                         }else{
//                             res.status(401).json({
//                                 "message":"Authentication Failed"
//                             });
//                         }
//                     }
//                 });
//             }else{
//                 res.status(401).json({
//                     "message":"Authentication Failed"
//                 });
//             }
//         }
//     });

    
// });


route.get('/',async (req,res,next)=>{
    email=req.body.email;
    password=req.body.password;

    let existingUser=await details.findOne({"email":email});

    if (!existingUser){
        res.status(401).json({
            "message":"Authentication failed"
        });
        return;
    }
    
    if(bcrypt.compare(compare,existingUser.password){
        try{
            const token=jwt.sign({
                id:existingUser._id
            },process.env.SECRET_KEY,
            {
                expiresIn:"4h"
            });
            res.status(200).json({
                "message":"Successfully Loged in"
            });
            return
 
        }catch(err){
            console.log(err);

        }
    }else{
        res.status(403).json({
            "message":"Authentification Failed"
        });
    }
});


route.get('/users',checkAuth,(req,res,next)=>{
    admin=req.body.admin;
    email=req.body.email;
    if (admin==true){
        details.find({},'email name')
        .then(result=>{
            res.json({
                "users":result
            });
        }).catch(err=>{
            console.log(err);
        });
    }
});

            
           
route.get('/Adminusers',checkAuth,(req,res,next)=>{
    admin=req.body.admin;
    email=req.body.email;
    if (admin==true){
        details.find({"admin":true},'email name',(err,result)=>{
            
            if (err) throw err;
            else{
                if (result){
                    res.json({
                        "users":result
                    });
                }else{
                    res.json({
                        "users":"No User available"
                    });

                }
             
            }   
        });
    }

});



    

module.exports=route;

