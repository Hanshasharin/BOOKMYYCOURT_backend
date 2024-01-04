const USERS= require('../models/userSchema')


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
}
// }
module.exports={doSignUp}