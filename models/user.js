const mongoose=require("mongoose");
const Userschema=new mongoose.Schema({
    productname:{
        type:String
    },
    productrate:{
        type:String
    },
    productquantity:{
        type:String
    },
    productquality:{
        type:String
    }
    
},{
    timestamps:true
})
module.exports=mongoose.model("products",Userschema)