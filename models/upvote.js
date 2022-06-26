const mongoose=require("mongoose");
const Upvotechema=new mongoose.Schema({
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
module.exports=mongoose.model("upvote",Upvotechema)