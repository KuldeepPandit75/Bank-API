require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app=express();
const BRANCH=require("./models/brach.js");

const port=3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

async function main(){
    await mongoose.connect(process.env.SECRET_KEY);
}

main()
.then(()=>{
    console.log("connection succeded!");
})
.catch(err=>console.log(err));

app.listen(port,()=>{
    console.log("listening on port ",port);
})

app.get("/",(req,res)=>{
    res.send("root is working");
})

app.get("/:bBranch",async(req,res)=>{
    let {bBranch}=req.params;
    const result = await BRANCH.find({branch: bBranch.toUpperCase()});
    res.send(result);
})