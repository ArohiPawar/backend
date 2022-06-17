const express=require("express");
const authrouter=express.Router();
const {signUp}=require("../controllers/auth.controllers");
authrouter.get("/healthecheck",(req,res)=>{
    res.send("SuccessFully Working");
});
authrouter.post("/addproduct",signUp);
// const userrouter=express.Router();


// userrouter.get("/",)
module.exports=authrouter;