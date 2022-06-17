const User=require("../models/user")


const getUserdata=(req,res)=>{
    User.find().then(response=>{
        res.json({
            message:"success",
            data:response
        })
    })
 
}
module.exports={
    getUserdata
}
