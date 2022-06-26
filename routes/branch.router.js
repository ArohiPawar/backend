const express=require("express");
const branchrouter=express.Router();
const {addbranchdata,getBranchdata,editbranchdata,deletebranchata}=require("../controllers/branch.controller")

branchrouter.get("/",getBranchdata)
branchrouter.put("/branch_update",editbranchdata)
branchrouter.delete("/branch_delete/:id",deletebranchata)
module.exports=branchrouter;
