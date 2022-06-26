const mongoose=require("mongoose");
const Downvotechema=new mongoose.Schema({
    branchid:{
        type:String
    },
    branchName:{
        type:String
    },
    voterusername:{
        type:String
    },
},{
    timestamps:true
})
module.exports=mongoose.model("downvote",Downvotechema)