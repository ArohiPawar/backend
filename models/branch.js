const mongoose=require("mongoose");
const Branchchema=new mongoose.Schema({
    branchname:{
        type:String
    },
    branchcode:{
        type:String
    },
    votecount:{
        type:Number
    },
    branchimg:{
        type:String
    }
    
},{
    timestamps:true
})
module.exports=mongoose.model("branch",Branchchema)