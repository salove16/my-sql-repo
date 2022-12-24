const express=require("express")
const router=express.Router()
const User=require("../models/users_models")

 
router.get("/login",(req,res,next)=>{
    return res.render("login")
    })
router.get("/forgot-password",(req,res,next)=>{
return res.render("forgotPassword")
})

router.post("/forgot-password",async(req,res,next)=>{
    // try {
    //     await User.findAll({where:{username:req.body.username}})
    //     .then(response=>{
    //      console.log(response)
    //      return res.send(response)
    //     }).catch(err=>{
    //      console.log(err)
    //     })
    //  } catch (error) {
    //      console.log(error)
    //  }
    console.log(req.body)
    const {email}=req.body
    res.send(email)
})
router.get("/reset-password",(req,res,next)=>{
    
})
router.post("/reset-password",(req,res,next)=>{
    
})


module.exports=router