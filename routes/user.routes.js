const express=require("express");
const userrouter=express.Router();
const {getUserdata,editdata}=require("../controllers/user.controller")

userrouter.get("/",getUserdata)
userrouter.put("/edit",editdata)
module.exports=userrouter;
