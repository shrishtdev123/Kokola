require('dotenv').config();

const mongoose=require("mongoose");
const url=process.env.MONGODB_URI;


const ConnetDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return; // ✅ Prevents multiple reconnections
    }
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
};

module.exports = ConnetDB;


// const ConnetDB=async()=>{

//       try 
//       {
//         await mongoose.connect(url);
//          console.log("DB is connected");
         
        
//       } catch (error) 
//       {
//           console.log(error);
          
//       }
// }

// module.exports=ConnetDB;