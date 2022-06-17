//its add buisness logic

const User=require("../models/User")
const signUp=async(req,res)=>{
    console.log(req.body)
   const user=new User({
    productname:req.body.productname,
    productrate:req.body.productrate,
    productquantity:req.body.productquantity,
    productquality:req.body.productquality
   })
  await user.save().then(data=>{
    console.log(data);
    res.json({
        message:"successfully registered"
    })
   })
}
module.exports={
    signUp
}