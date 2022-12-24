const Sequelize = require("sequelize")
const sequelize = new Sequelize("swsdev", "root", "tucku9097", {

    dialect: "mysql",

    host: "localhost",

})




module.exports = sequelize;