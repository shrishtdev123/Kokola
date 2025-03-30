require('dotenv').config();

const mongoose=require("mongoose");

const connectDB=async()=>{

  try 
  {
        mongoose.connection.on("connected",()=>{
            
             console.log("DB Connected");
             
        })
        await mongoose.connect(`${process.env.MONGODB_URI}/UserallData`)
  } 
  catch (error) 
  {
     console.log(error);
     
  }
}

module.exports=connectDB;