const connection = require("../config/db")
const Sequelize = require("sequelize")

const Accounts = connection.define("accounts", {
    accid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    orgid:{
        type: Sequelize.INTEGER,
        unique:true,
        allowNull: false,
    },
    accnumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        // defaultValue:Math.floor(100000 + Math.random() * 900000)
        
    },
    acctmode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:1

    },
    acctype: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:1
    },
    accname: {
        type: Sequelize.STRING(200),
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING(500)
    },
    city: {
        type: Sequelize.STRING(100)
    },
    state: {
        type: Sequelize.STRING(100)
    },
    country: {
        type: Sequelize.STRING(100)
    },
    pincode: {
        type: Sequelize.STRING(10)
    },
    mpcname: {
        type: Sequelize.STRING(200)
    },
    mpcdesg: {
        type: Sequelize.STRING(100)
    },
    mpcemail: {
        type: Sequelize.STRING(300)
    },
    mpcphone: {
        type: Sequelize.STRING(100)
    },
    tpcname: {
        type: Sequelize.STRING(200)
    },
    tpcdesg: {
        type: Sequelize.STRING(100)
    },
    tpcemail: {
        type: Sequelize.STRING(300)
    },
    tpcphone: {
        type: Sequelize.STRING(100)
    },
    status: {
        type: Sequelize.STRING(15)
    },
    remarks: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:1
    }

},
{
    timestamps:false
});

// console.log(Sequelize)
module.exports = Accounts