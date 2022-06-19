const express=require("express");
const authrouter=express.Router();
const {signUp}=require("../controllers/auth.controllers");
var multipart = require('connect-multiparty');
const path= require("path");
var multipartMiddleware = multipart({uploadDir: path.join(__dirname,"uploads")});

authrouter.get("/healthecheck",(req,res)=>{
    res.send("SuccessFully Working");
});
authrouter.post("/addproduct",multipartMiddleware,signUp);
// const userrouter=express.Router();


// userrouter.get("/",)
module.exports=authrouter;