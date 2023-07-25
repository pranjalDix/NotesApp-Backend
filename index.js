const express=require('express');
require('dotenv').config()
const app=express();
const connectWithDb=require('./config/db')

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.listen(process.env.PORT,()=>{
    console.log("Server is runnig on port 4000")
})

const user=require('./routes/user')
const note=require('./routes/note')
app.use("/api/user",user)
app.use("/api/note",note)

connectWithDb()
