const sequelize=require("../config/db")
const { QueryTypes } = require("sequelize")
const express=require("express")
const router=express.Router()

router.post("/actype",async(req,res)=>{
    // console.log(req.body.actypename)

    try{
        const accountType=`INSERT INTO accounttype () VALUES ()`
        await sequelize.query(accountType).then(function (cb){
            return res.status(200).send("succeccfully created")
            
            
        })
        
    }catch(err){
        return res.status(500).send(err.message);
    }
   
})


module.exports=router