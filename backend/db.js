require('dotenv').config();

const mongoose=require("mongoose");
const url=process.env.MONGODB_URI;

const ConnetDB=async()=>{

      try 
      {
        await mongoose.connect(url);
         console.log("DB is connected");
         
        
      } catch (error) 
      {
          console.log(error);
          
      }
}

module.exports=ConnetDB;