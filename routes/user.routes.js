const express=require("express");
const userrouter=express.Router();
const {getUserdata,editdata,deleteData}=require("../controllers/user.controller")

userrouter.get("/",getUserdata)
userrouter.put("/edit",editdata)
userrouter.delete("/delete/:id",deleteData)
module.exports=userrouter;
