const express=require("express")
const app=express()
app.use(express.json())
const connection=require("./src/config/db")
const { QueryTypes } = require("sequelize")
const accountType_controller=require("./src/controllers/accountType_controller")
const accounts_controller=require("./src/controllers/accounts_controller")
// const practice_controller=require("./src/controllers/practice_controller")
const user_controller=require("./src/controllers/user_controller")
const passwordReset=require("./src/middleware/passwordReset")

app.set("view engine", "ejs")

app.use("/account",accountType_controller)
app.use("/account",accounts_controller)
// app.use("/account",accountSettings_controller)
// app.use("/account",accountWallet_controller)

app.use("/account",user_controller)
app.use("/",passwordReset)
// app.use("/",practice_controller)


app.listen(4000,()=>{
console.warn("listening to port 4000")
})

connection
    .sync({
        logging:console.log,
        
    })
    .then(()=>{
        console.log("connection to data established")
    })
    .catch(err=>{
        console.log(err)
    })


