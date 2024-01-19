
const courts =  require ('../models/courtSchema')

const createCourt=(req,res)=>{
courts({
    
    courtname:req.query.courtname,
    location:req.query.location,
    adress:req.query.adress,
    mobilenumber:req.query.mobilenumber,
    description:req.query.description,
    courtPic:req.file.filename
}).save().then((response)=>{
    res.status(200).json("court created succesfullyy")
}).catch(err=>{
    res.status(401).json("court created failed")
})
}
module.exports ={createCourt}