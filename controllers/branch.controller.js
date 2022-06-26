const Branch=require("../models/branch")


const getBranchdata=(req,res)=>{
    Branch.find().then(response=>{
        res.json({
            message:"success",
            data:response
        })
    })
 
}

const addbranchdata=async(req,res)=>{
    console.log('req');
    console.log(req.body);
    // const splitArray = req.files.file.path.split("\\");
    // console.log('splitArray');
    // console.log(splitArray);
    // console.log(splitArray[splitArray.length-1]);

    const branch=new Branch({
        branchname:req.body.branchname,
        branchcode:req.body.branchcode,
        // branchimg:splitArray[splitArray.length-1]
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

const editbranchdata=(req,res)=>{
  const data=req.body;
  console.log('edit data');
  console.log(data);
  Branch.updateOne({_id:data._id},{$set:{branchname:data.branchname,branchcode:data.branchcode,votecount:data.votecount}}).then(result=>{
        res.json({
            message:"Update success"
        })
    }).catch(err=>{
        res.json({
            message:" Failed"
        })    
    })
 
}
const deletebranchata=(req,res)=>{
const id=req.params.id;
console.log('req');
console.log(req);
Branch.deleteOne({_id:id}).then(result=>{
    res.json({
        message:"successfully deleted"
    })
}).catch(err=>{
    res.json({
        message:"failed"
    })
})
}
module.exports={
    getBranchdata,
    addbranchdata,
    editbranchdata,
    deletebranchata
}
