const connection = require("../config/db")
const Sequelize = require("sequelize")

const AcountSettings= connection.define('accountsettings', {
    asid:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    accid:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    asaid: {
        type: Sequelize.INTEGER
      },
      accode: {
      type: Sequelize.STRING(15)
    },
    sacode: {
        type: Sequelize.STRING(15),
        allowNull:false
    },
    purpose: {
        type: Sequelize.STRING(150)
      },
      certname: {
        type: Sequelize.STRING(50)
      },
      certficate: {
        type: Sequelize.TEXT,
      },
      certexpiredate:{
        type: Sequelize.DATE},
        respurl:{
             type: Sequelize.STRING(200)},
             macidwhitelist:{
         type: Sequelize.INTEGER,defaultValue:0},
         allowusers:{
             type: Sequelize.INTEGER,defaultValue:0,comment:"0-not allow,1-allow"},
             allowkycdata:{
                type: Sequelize.INTEGER,defaultValue:0,comment:"0-not allow,1-allow"},
             gstno:{
             type: Sequelize.STRING(50)},
             monthlyrent:{
             type: Sequelize.DECIMAL(10,2),defaultValue:0.00},
             monthlywavier:{
                type: Sequelize.DECIMAL(10,2),defaultValue:0.00},
             mincommitment:{
                type: Sequelize.DECIMAL(10,2),defaultValue:0.00},
             dateupdated:{
             type: Sequelize.DATEONLY},
        
    }, {
        timestamps:false,
        freezeTableName:true,
        
    });

    module.exports=AcountSettings