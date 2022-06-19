const User=require("../models/user")


const getUserdata=(req,res)=>{
    User.find().then(response=>{
        res.json({
            message:"success",
            data:response
        })
    })
 
}

const editdata=(req,res)=>{
  const data=req.body;
  console.log('edit data');
  console.log(data);
  User.updateOne({_id:data._id},{$set:{productname:data.productname,productrate:data.productrate,productquantity:data.productquantity,productquality:data.productquality}}).then(result=>{
        res.json({
            message:"Update success"
        })
    }).catch(err=>{
        res.json({
            message:" Failed"
        })    
    })
 
}
module.exports={
    getUserdata,
    editdata
}
