var express = require('express');
const {createCourt,addtimeslotData} = require('../controllers/adminController')
var router = express.Router();
const multer = require('multer')
const {userAuth}=require('../middleWares/authorization')

const fileStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname)
    }
})

const uploadImage = multer({storage:fileStorage})
router.post('/createCourt', userAuth,uploadImage.single('image'),createCourt)
router.post('/addtimeslotData',userAuth ,addtimeslotData)
module.exports = router;
