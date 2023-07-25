const mongoose=require('mongoose')
const User=require('../models/user')

const notesSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})


module.exports=mongoose.model('Note',notesSchema)