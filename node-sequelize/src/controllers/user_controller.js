const sequelize=require("../config/db")
const User=require("../models/users_models")
// const Account=require("../models/accounts_model")

const express=require("express")
// const { response } = require("express")
const router=express.Router()

router.post("/user",async(req,res)=>{
    console.log(req.body)
try {
   await User.findAll({where:{username:req.body.username}})
   .then(response=>{
    console.log(response)
    return res.send(response)
   }).catch(err=>{
    console.log(err)
   })
} catch (error) {
    console.log(error)
}
})

router.get('/user', (req, res) => {
    User.findAll() 
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    })
  })



module.exports=router