const sequelize=require("../config/db")
const { QueryTypes } = require("sequelize")
const express=require("express")
const router=express.Router()

router.post("/actwal",async(req,res)=>{
    // console.log(req.body.actypename)

    try{
        const keys=Object.keys(req.body)
        const values=Object.values(req.body).map(el=>{
            return `"${el}"`
        })
        // console.log(keys,values)
        const Accountwallet=`INSERT INTO accountwallet (${keys.toString()}) VALUES (${values})`
        await sequelize.query(Accountwallet).then(function (cb){
            return res.status(200).send("succeccfully created")
            
            
        })
        
    }catch(err){
        return res.status(500).send(err.message);
    }
   
})


module.exports=router