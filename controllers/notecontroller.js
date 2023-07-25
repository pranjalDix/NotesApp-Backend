const mongoose=require("mongoose")
const BigPromise=require('../middleware/bigpromise')
const Note=require('../models/note')

exports.getNote=BigPromise(async(req,res)=>{
    
    const id=req.userId;

    const note=await Note.find({user:id})

    res.status(200).json({
        note
    })
})

exports.addNote=BigPromise(async(req,res)=>{
    
    const {title,description}=req.body
    

    const note=await Note.create({

        title:req.body.title,
        description:req.body.description,
        user:req.userId
    })

    res.status(200).send({
        success:true,
        note
    })
})

exports.deleteNote=BigPromise(async(req,res)=>{

    const id=req.params.id

    const note=await Note.findById(id);
    if(!note){
        res.status(401).json({
            message:"Note Does not exsist"
        })
    }
  
   await Note.findByIdAndDelete(id)

    res.status(200).json({
        success:true
    })
})

exports.updateNote=BigPromise(async(req,res)=>{
    const id=req.params.id
    const {title,description}=req.body

    const newNote={
        title,
        description,
        user:req.userId
    }

    const note=await Note.findById(id);
    if(!note){
        return res.status(401).json({
            message:"Note Does not exsist"
        })
    }

    await Note.findByIdAndUpdate(id,newNote,{new:true})
    res.status(200).json({
        newNote
    })

})