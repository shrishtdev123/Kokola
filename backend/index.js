
require('dotenv').config();
const express=require("express");
const ConnetDB = require('./db');
const userRouter=require("./route/userRouter");
const cors=require("cors")
 const app=express();

// db is connected here
ConnetDB();
app.use(cors());
app.use(express.json());
app.use("/api/user",userRouter)
app.listen(process.env. PORT,()=>{
    console.log("server is running");
    
})