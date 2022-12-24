const connection = require("../config/db")
const Sequelize = require("sequelize")

const Users = connection.define("users", {
    uid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    accid: {
        type: Sequelize.INTEGER,
        allowNull: false,

    },
    role: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING(100),
        // allowNull: false,
        // defaultValue:1

    },
    userpwd: {
        type: Sequelize.STRING(200),
        // allowNull: false,
        // defaultValue:1
    },
    address: {
        type: Sequelize.STRING(200),
        // allowNull: false,
    },
    city: {
        type: Sequelize.STRING(100)
    },
    state: {
        type: Sequelize.STRING(100)
    },
    pincode: {
        type: Sequelize.STRING(10)
    },
    useremail: {
        type: Sequelize.STRING(100)
    },
    userphone: {
        type: Sequelize.STRING(15)
    },
    status: {
        type: Sequelize.STRING(15)
    },
    datecreated: {
        type: Sequelize.DATE
      },
    status: {
        type: Sequelize.INTEGER,
        Comment:"0-Inactive,1-Active,2-Blocked,-1-Delete",
        defaultValue:1,
        key:true

    }

},{
    timestamps: false
});

// console.log(Sequelize)
module.exports = Users