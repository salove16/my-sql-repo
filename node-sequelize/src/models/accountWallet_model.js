const connection = require("../config/db")
const Sequelize = require("sequelize")



const AccountWallet= connection.define('accountwallet', {
    abid:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    accid:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    acctypeid: {
        type: Sequelize.SMALLINT,defaultValue:1,allowNull:false
      },
      accbalance: {
        type: Sequelize.DECIMAL(10,2),
        defaultValue:0.00,
        allowNull:false
    },
    creditlimit: {
        type: Sequelize.DECIMAL(10,2),
        defaultValue:0.00,
        allowNull:false
      },
      validtill: {
        type: Sequelize.DATE,
        defaultValue:Sequelize.DATEONLY
        
      }
    }, {
        timestamps:false,
        freezeTableName:true,
        
    });

    module.exports=AccountWallet