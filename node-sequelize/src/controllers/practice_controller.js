const express=require("express")
const router=express.Router()
const User=require("../models/practice")

router.get('/', (req, res) => {
    User.findAll() 
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    })
  })

  router.post('/',async (req, res) => {
   const user=await User.create(req.body) 
    return res.send(user)
  })



  module.exports=router