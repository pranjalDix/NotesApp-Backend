const jwt =require('jsonwebtoken')
const bigpromise = require('./bigpromise')
const User=require('../models/user')

exports.isLoggedIn=bigpromise(async(req,res,next)=>{

    const token=req.header('Authorization').split(" ")[1];
    
    try {
        if(token){
            // token=token
     
             
             const decode=jwt.verify(token,process.env.JWT_SECRET)
             
             req.userId=decode.id                  // This is the property that I am creating
     
         }
         else{
             return res.status(401).json({
                 message:"Unauthorized User "
             })
         }
         return next()
    } catch (error) {
        return res.status(401).json({
            message:"Invalid Token "
        })
    }
    
})