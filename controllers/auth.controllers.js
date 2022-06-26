//its add buisness logic

const User=require("../models/user")
const Student=require("../models/students")
const Branch=require("../models/branch")
const Upvote=require("../models/upvote")
const Downvote=require("../models/downvote")


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

const addbranchdata=async(req,res)=>{
    console.log('req');
    console.log(req.body);
    const splitArray = req.files.file.path.split("\\");
    console.log('splitArray');
    console.log(splitArray);
    console.log(splitArray[splitArray.length-1]);

    const branch=new Branch({
        branchname:req.body.branchname,
        branchcode:req.body.branchcode,
        votecount:req.body.votecount,
        branchimg:splitArray[splitArray.length-1]
   })
   console.log('branch');
   console.log(branch);
  await branch.save().then(data=>{
    console.log(data);
    res.json({
        message:"successfully registered"
    })
   })
}

const addstudentdata=async(req,res)=>{
    console.log('req');
    console.log(req.body);
    const splitArray = req.files.file.path.split("\\");
    console.log('splitArray');
    console.log(splitArray);
    console.log(splitArray[splitArray.length-1]);

    const student=new Student({
        studentname:req.body.studentname,
        studentbranch:req.body.studentbranch,
        studentemail:req.body.studentemail,
        studentpassword:req.body.studentpassword,
        studentimg:splitArray[splitArray.length-1]
   })
   console.log('branch');
   console.log(student);
  await student.save().then(data=>{
    console.log(data);
    res.json({
        message:"successfully registered"
    })
   })
}

const login=(req,res)=>{

    Student.findOne({studentemail:req.body.studentemail}).then(result=>{
            if(result){
                res.json({
                    message:"Login success",
                })
            }
            else{

                res.json({
                    message:"Login Failed,Passwords donot match"
                })
            }

    }).catch(err=>{
        res.json({
            message:"No user Found !!"
        })
    })
  }

  const upVoteData=async(req,res)=>{
    console.log('req');
    console.log(req.body);

    const Upvot=new Upvote({
        branchid:req.body.branchid,
        voterusername:req.body.voterusername,
        branchname:req.body.branchname,
   })
   console.log('upVoteData');
   console.log(Upvot);
  await Upvot.save().then(data=>{
    console.log(data);
    res.json({
        message:"successfully registered"
    })
   })
}

const downVoteData=async(req,res)=>{
    console.log('req');
    console.log(req.body);

    const Dwnvot=new Downvote({
        branchid:req.body.branchid,
        voterusername:req.body.voterusername,
        branchname:req.body.branchname,
   })
   console.log('upVoteData');
   console.log(Dwnvot);
  await Dwnvot.save().then(data=>{
    console.log(data);
    res.json({
        message:"successfully registered"
    })
   })
}

const voteone=(req,res)=>{

    Student.findOne({studentemail:req.body.studentemail}).then(result=>{
            if(result){
                res.json({
                    message:"Found",
                })
            }
            else{

                res.json({
                    message:"not found"
                })
            }

    }).catch(err=>{
        res.json({
            message:"No user Found !!"
        })
    })
  }
  const branchCount=(req,res)=>{

  details.count({ location: "New York" }, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
  }
module.exports={
    signUp,
    addbranchdata,
    addstudentdata,
    login,
    upVoteData,
    voteone,
    downVoteData
}