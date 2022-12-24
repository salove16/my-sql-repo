// const sequelize=require("../config/db")
// const { QueryTypes } = require("sequelize")
const express=require("express")
const router=express.Router()

const Accountsettings=require("../models/accountSettings_model")

// router.post("/actset",async(req,res)=>{
//     // console.log(req.body.actypename)

//     try{
//         const keys=Object.keys(req.body)
//         const values=Object.values(req.body).map(el=>{
//             return `"${el}"`
//         })
//         // console.log(keys,values)
//         const Accountsettings=`INSERT INTO accountsettings (${keys.toString()}) VALUES (${values})`
//         await sequelize.query(Accountsettings).then(function (cb){
//             return res.status(200).send("succeccfully created")
            
            
//         })
        
//     }catch(err){
//         return res.status(500).send(err.message);
//     }
   
// })

router.get("/actset",async(req,res)=>{
const accountSettings=await Accountsettings.findAll()
return res.send(accountSettings)
})


router.post('/actset',async (req, res) => {
    console.log(req.body)
    const accountSetting= await Accountsettings.create(req.body) 
     return res.send(accountSetting)
   })


module.exports=router