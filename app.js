const express=require("express");
const cors=require("cors")
// const userrouter=require("./")
const app=express();
app.use(cors())
const authrouter=require("./routes/auth.routes");
app.use(express.json());
app.use(authrouter);
const fileuploadrouter=require("./routes/fileupload.routes")
const userrouter=require("./routes/user.routes")
app.use(express.urlencoded({extended:true}))
app.use("/user",userrouter)
app.use("/file",fileuploadrouter)
app.use(express.static('./routes/uploads/'))
module.exports=app;