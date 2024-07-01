const mongoose=require("mongoose");

const branchSchema= new mongoose.Schema({
    ifsc: String,
    bank_id: Number,
    branch: String,
    address: String,
    city: String,
    district: String,
    state: String,
    bank_name: String
})

const BRANCH_DET= mongoose.model("BRANCH_DET",branchSchema);

module.exports=BRANCH_DET;