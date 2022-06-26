const mongoose=require("mongoose");
const Userschema=new mongoose.Schema({
    studentname:{
        type:String
    },
    studentemail:{
        type:String
    },
    studentpassword:{
        type:String
    },
    studentbranch:{
        type:String
    },
    
    studentimg:{
        type:String
    }
    
},{
    timestamps:true
})
module.exports=mongoose.model("students",Userschema)