const Student=require("../models/students")


const getStudentdata=(req,res)=>{
    Student.find().then(response=>{
        res.json({
            message:"success",
            data:response
        })
    })
 
}

const editstudentdata=(req,res)=>{
  const data=req.body;
  console.log('edit data');
  console.log(data);
  Student.updateOne({_id:data._id},{$set:{studentname:data.studentname,studentbranch:data.studentbranch}}).then(result=>{
        res.json({
            message:"Update success"
        })
    }).catch(err=>{
        res.json({
            message:" Failed"
        })    
    })
 
}
const deletestudentsdata=(req,res)=>{
const id=req.params.id;
console.log('req');
console.log(req);
Student.deleteOne({_id:id}).then(result=>{
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
    getStudentdata,
    editstudentdata,
    deletestudentsdata
}
