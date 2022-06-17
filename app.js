const express=require("express");
const cors=require("cors")
// const userrouter=require("./")
const app=express();
app.use(cors())
const authrouter=require("./routes/auth.routes");
app.use(express.json());
app.use(authrouter);
const userrouter=require("./routes/user.routes")
app.use(express.urlencoded({extended:true}))
app.use("/user",userrouter)

module.exports=app;