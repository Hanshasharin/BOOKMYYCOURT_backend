const { request } = require('express');
const courts = require('../models/courtSchema');
const USERS= require('../models/userSchema')
const jwt = require('jsonwebtoken')

const doSignUp=(req,res)=>{
try{
    USERS({
    name: req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    password:req.body.password,
}).save().then((resp)=>{
    console.log(resp,"res after user creation");
    res.status(200).json({message:'signup successfull'});

})
}
catch (error) {
    console.error('Signup failed:', error);
    res.status(403).json({ message: `Signup failed: ${error.message || 'Unknown error'}` });
  }
// catch(error){
//     console.log("error")
//     res.status(403).json({message:'signup failed'})
// }
}

const doLogin =async (req,res)=>{
    console.log(req.body)
const userDetails= await USERS.findOne({email:req.body.email})
if (userDetails){
    if (userDetails.password===req.body.password){
        let token = null
         token =jwt.sign({userId:userDetails._id,name:userDetails.name,role:userDetails.role,email:userDetails.email},process.env.JWT_PASSWORD,{expiresIn:'2d'})
        res.status(200).json({message:'login successful ',token,userDetails})
    }
}else{
    res.status(403).json({message:'login failed'})  
}
}

const getCourtsData=(req,res)=>{
courts.find().then((response)=>{
    res.status(200).json(response)
})
.catch((err)=>{
    res.staus(500).json('server error')
})
}
const getCourtDatabyId=(req,res)=>{
    courts.findOne({_id:req.query.id}).then((response)=>{
        res.status(200).json(response)
    }).catch((err)=>{
        res.status(404).json("err")
    })
}
module.exports={doSignUp,doLogin,getCourtsData,getCourtDatabyId}