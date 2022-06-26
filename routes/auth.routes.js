const express=require("express");
const authrouter=express.Router();
const {signUp,addbranchdata,addstudentdata,login,upVoteData,downVoteData}=require("../controllers/auth.controllers");
var multipart = require('connect-multiparty');
const path= require("path");
var multipartMiddleware = multipart({uploadDir: path.join(__dirname,"uploads")});

authrouter.get("/healthecheck",(req,res)=>{
    res.send("SuccessFully Working");
});
authrouter.post("/addproduct",multipartMiddleware,signUp);
authrouter.post("/add_branch",multipartMiddleware,addbranchdata);
authrouter.post("/add_student",multipartMiddleware,addstudentdata);
authrouter.post("/login",multipartMiddleware,login);
authrouter.post("/upvote",multipartMiddleware,upVoteData);
authrouter.post("/downvote",multipartMiddleware,downVoteData);
// const userrouter=express.Router();


// userrouter.get("/",)
module.exports=authrouter;