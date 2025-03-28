const express=require("express");
const userController = require("../controller/userController");

const router=express.Router();

router.post("/adduser",userController.adduser);

router.get("/getuser",userController.getuser);


module.exports=router;