const User=require("../models/User")


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
