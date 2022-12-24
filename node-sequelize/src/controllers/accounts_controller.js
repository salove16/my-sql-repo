const sequelize=require("../config/db")
const { QueryTypes } = require("sequelize")
const Accounts=require("../models/accounts_model")
const Accountsettings=require("../models/accountSettings_model")
// const AccountSettings = require("../models/accountSettings_model")

const express=require("express")
const router=express.Router()



// router.post("/",async(req,res)=>{
//     // console.log(req.body.actypename)

//     try{
//         const keys=Object.keys(req.body)
//         const values=Object.values(req.body).map(e=>{
//             return `"${e}"`
//         })
//         // console.log(keys,values)
//         const Accounts=`INSERT INTO accounts (${keys.toString()}) VALUES (${values})`
//         await sequelize.query(Accounts).then(function (cb){
//             return res.status(200).send("succeccfully created")
//             })
        
//     }catch(err){
//         return res.status(500).send(err.message);
//     }
   
// })

router.post("/",async(req,res)=>{
    console.log(req.body)
    function createRandomAcc(){
        return Math.floor(100000 + Math.random() * 900000);
   }
   const accsett={
    purpose:"To utilize micro services",
    sacode:""
}
    try {
        const ranNumber=createRandomAcc();
        let acc;
        await Accounts.findAll({attributes: ['accnumber']}).then(response => {
            acc=response.map((el)=>{
                return el["accnumber"];
            });
        
        }).catch((error) => {
            return res.status(500).send(error.message);
        });
    //     const account=await Accounts.create(req.body) 
    // return res.send(account)
    while(acc.includes(ranNumber)){
        ranNumber=createRandomAcc();   
   }
   
    req.body["accnumber"]=ranNumber;
    await Accounts.create(req.body).then(async(response) => {
        await Accounts.findAll({
          where: {
            accname: response["accname"]
          }
        }).then(async(response)=>{
          accsett["accid"]=response[0]["accid"]
          await Accountsettings.create(accsett).then((responce)=>{
res.send(responce)
          }).catch((err)=>{
              console.log(err)
          })
        }).catch((error) => {
          return res.status(500).send(error.message);
       });
       }).catch((error) => {
          return res.status(500).send(error.message);
       });
    
    } catch (error) {
        return res.status(400).send({error:message.error})
    }
})

router.get("/",async(req,res)=>{
    const account=await Accounts.findAll()
    return res.send(account)
})


module.exports=router
