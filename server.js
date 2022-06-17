require("dotenv").config()
const port=process.env.PORT||8081
const app=require("./app")
const dbconnect=require("./db");

dbconnect(process.env.MONGO_URL).then(()=>{
    // console.log("db connected");
    app.listen(port,()=>{
        console.log(`db connected ,server is running at port ${port}`);
    })
    }).catch(err=>{
        console.log(err);
        console.log("Error connecting with db")
    })
   