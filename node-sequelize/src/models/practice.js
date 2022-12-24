const connection=require("../config/db")
const sequelize=require("sequelize")

const test=connection.define("test",{
    uuid:{
        // type:sequelize.UUID,
        // primaryKey:true,
        // defaultValue:sequelize.UUIDV4
        type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true

    },
    name:{type:sequelize.STRING(50),
        allowNull: false,
        defaultValue: "Doe"},
    bio:sequelize.TEXT
});




    module.exports=test
