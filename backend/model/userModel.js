const mongoose=require("mongoose")

const userSchema = new mongoose.Schema({
  data: Object,
});

 const User = mongoose.model("User", userSchema);


 module.exports=User;
