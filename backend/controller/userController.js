const User=require("../model/userModel.js")
const userController={

        // function to add user information in modal

        adduser:async(req,res)=>{
             
            try {
                  // Log the request body
                  console.log(req.body);
                
                  // Create a new user document
                  const newUser = await User.create({data:req.body}); // 👈 Directly pass req.body
              
                  res.json({
                    success: true,
                    message: "Data added successfully"
                  });
              
                  console.log("User created successfully");
                } catch (error) {
                  console.error(error);
                  res.status(500).json({
                    success: false,
                    message: "An error occurred while adding data",
                  });
                }
            
        },
        getuser:async(req,res)=>{


              try {

                  const data=await User.find({});
                
                   res.json({
                     success:true,
                      data
                   })
              } 
              catch (error) {
                

                console.log(error);
                res.json({
                   sucess:false,
                   massage:"some error is going on"
                })
              }
        },
        getsingleuser:async(req,res)=>{

              res.json({
                  msg:"massage update successfully"
              })
        }
}

module.exports=userController;