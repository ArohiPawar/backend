const express=require("express");
const studentrouter=express.Router();
const {getStudentdata,editstudentdata,deletestudentsdata}=require("../controllers/student.controller")

studentrouter.get("/",getStudentdata)
studentrouter.put("/student_update",editstudentdata)
studentrouter.delete("/student_delete/:id",deletestudentsdata)
module.exports=studentrouter;
