const express=require("express")
const da=require("../config/db")
const { getSchool, createSchool } = require("../controllers/school")
const router=express.Router()

//GET ALL STUDENTS LIST
router.get('/listSchools',getSchool)


//CREATE STUDENTS || POST
router.post('/addSchool',createSchool)

module.exports=router