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
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    education1:req.body.education1,
    education2:req.body.education2,
    profilePicture:splitArray[splitArray.length-1]
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