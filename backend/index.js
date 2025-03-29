
// require('dotenv').config();
// const express=require("express");
// const ConnetDB = require('./db');
// const userRouter=require("./route/userRouter");
// const cors=require("cors")
//  const app=express();

// // db is connected here
// ConnetDB();
// app.use(cors());
// app.use(express.json());
// app.use("/api/user",userRouter)
// app.get("/",(req,res)=>{

//     res.send("API is working...")
// })

// // const PORT = process.env.PORT ||3400;
// // app.listen(PORT,()=>{
// //     console.log("server is running");
    
// // })
// module.exports = app;

require('dotenv').config();
const express = require("express");
const ConnetDB = require('./db');
const userRouter = require("./route/userRouter");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(async (req, res, next) => {
    await ConnetDB();  // ✅ Ensures DB connection only when needed
    next();
});

// API Routes
app.use("/api/user", userRouter);

app.get("/", async (req, res) => {
    await ConnetDB(); // ✅ Ensure DB is connected before handling the request
    res.send("API is working on Vercel!");
});

// ❌ Do NOT use app.listen()
// ✅ Export the app for Vercel
 module.exports = app;

//  const port=process.env.PORT|| 3400
// app.listen(port,()=>{
//       console.log("api is working here..");
      
// })
