
const express=require('express')
const router=express.Router()
const {signup,signIn }=require('../controllers/usercontroller')


router.route("/signup").post(signup)

router.route("/signIn").post(signIn)


module.exports=router