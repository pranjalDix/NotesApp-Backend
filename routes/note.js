const express=require('express')
const router=express.Router()
const{getNote,addNote,deleteNote,updateNote}=require('../controllers/notecontroller')
const { isLoggedIn } = require('../middleware/user')


router.route('/getNote').get(isLoggedIn,getNote)

router.route('/addNote').post(isLoggedIn,addNote)

router.route('/delete/:id').delete(isLoggedIn,deleteNote)

router.route('/update/:id').put(isLoggedIn,updateNote)


module.exports=router