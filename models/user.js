const mongoose=require("mongoose");
const Userschema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    education1:{
        type:String
    },
    education2:{
        type:String
    },
    profilePicture:{
        type:String
    }
    
},{
    timestamps:true
})
module.exports=mongoose.model("resumes",Userschema)