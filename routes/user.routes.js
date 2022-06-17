const express=require("express");
const userrouter=express.Router();
const {getUserdata}=require("../controllers/user.controller")

userrouter.get("/",getUserdata)
module.exports=userrouter;
