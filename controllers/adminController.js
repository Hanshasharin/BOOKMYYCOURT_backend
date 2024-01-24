
const courts =  require ('../models/courtSchema')
const CourtSchedules = require ('../models/courtSchedulesModel')
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
const addtimeslotData=(req,res)=>{
console.log(req.body);
const{startDate,endingDate,cost,slot,courtId}=req.body
let currentDate= new Date(startDate)
const lastDate= new Date(endingDate)
const slotObjects=[]

while(currentDate<=lastDate){
    for(let slots of slot){
    slotObjects.push({
date:JSON.parse(JSON.stringify(currentDate)),
slots:{
name:slots.time,
id:slots.id
    },
    cost,
    courtId
})

}
currentDate.setDate(currentDate.getDate()+1)

}
CourtSchedules.insertMany(slotObjects).then((response)=>{
    res.status(200).json('schedules created successfully')
})
.catch((err)=>{
    // res.status(400).json('schedules created failed')
    res.status(403).json({ message: ` failed: ${err.message || 'Unknown error'}` });
})
console.log(slotObjects);

}
module.exports ={createCourt,addtimeslotData}