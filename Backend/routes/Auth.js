require('dotenv').config();
const exp = require("express");
const router = exp.Router();
const bcrypt = require("bcrypt");
const Admin=require("../model/Admin_db");
const jwt = require("jsonwebtoken");



router.get("/reg",async(req,res)=>{
    var name="Shantanu";
    var email = "sg@gmail.com";
    var password = "1230"

    const salt=await bcrypt.genSalt(10);
    const hp=await bcrypt.hash(password,salt);

    // await Admin.create({
    //     name:name,
    //     email:email,
    //     password:hp,
    // })
 
    res.send(hp)

});

router.post("/login",async (req,res)=>{
    var e=req.body.email;
    var p=req.body.pass;
 
    var ldata=await Admin.findOne({email:e})
 
    if(ldata!=null){
 
     bcrypt.compare(p,ldata.password,(err,result)=>{
         if(err){
             throw err
         }else{
             if(result==true){
 
                 var udata={
                     aid:ldata._id,
                     aname:ldata.name
                 };
 
                 var jtoken=jwt.sign(udata, process.env.SECRET_KEY);
 
 
                 res.json({token:jtoken})
             }else{
                 res.json({msg:"Invalid Login"});
             }
         }
     })
    }else{
     res.json({msg:"Invalid Login"});
    }
 });
 
 module.exports=router;
 
 
