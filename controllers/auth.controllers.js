//its add buisness logic

const User=require("../models/user")
const signUp=async(req,res)=>{
    console.log('req');
    console.log(req);
    
    const splitArray = req.files.file.path.split("\\");
    console.log('splitArray');
    console.log(splitArray);
    console.log(splitArray[splitArray.length-1]);

    const user=new User({
        productname:req.body.productname,
        productrate:req.body.productrate,
        productquantity:req.body.productquantity,
        productquality:req.body.productquality,
        profilePicture:splitArray[splitArray.length-1]
   })
   console.log('user');
   console.log(user);
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