const express = require("express")
const app = express()
const swaggerUI = require("swagger-ui-express");
const mysql2 = require("mysql2")
const mysql = require("mysql")
const cors = require("cors")

app.use(cors())
app.use(express.json())
// const swaggerJsDoc = require("swagger-jsdoc");
const YAML = require("yamljs");
const swaggerJSDocs = YAML.load("./api.yaml");

// const swaggerUi = require("swagger-ui-express"); 


const db = mysql.createConnection({
    user: "root",
    host: 'host.docker.internal'||"localhost",
    port: "3306",
    password: "Tucku@9097",
    database: "testing1"
})

setInterval(function () {
    db.query('SELECT 1');
}, 5000);
// const swaggerOptions = {
//     swaggerDefinition: {
//         info: {
//             version: "1.0.0",
//             title: "user API",
//             description: "user API Information",
//             contact: {
//                 name: "Amazing Developer"
//             },
//             servers: ["http://localhost:4001"]
//         }
//     },
//     // ['.routes/*.js']
//     apis: ["index.js"]
// };

// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));

// /**
//  * @swagger
//  *  components:
//  *      schemes:
//  *          User:
//  *              type: object
//  *              properties:
//  *                  name:
//  *                      type: string
//  *                  age:
//  *                      type: integer
//  */

// /**
//  * @swagger
//  * /users/create:
//  *   post:
//  *     summary: Create a JSONPlaceholder user.
//  *     responses:
//  *       201:
//  *         description: Created
//  *         reqestBody:
//  *             required: true
//  *             content:
//  *                 application/json:      
// */

app.post("/users/create", (req, res) => {

    const name = req.body.name;
    const age = req.body.age;

    db.query('INSERT INTO user (name,age) VALUES (?,?)', [name, age],
        (err, result, field) => {
            if (err) {
                console.log(err);
            }
            else {
                return res.json("successfully created ");
            }

        });

})

// /**
//  * @swagger
//  * /users:
//  *  get:
//  *     summary: To get all user data
//  *     description: This api is used to fetch all data from users
//  *     responses:
//  *        200:
//  *           description: A successful response
//  *           content:
//  *              application/json:
//  *                  schema:
//  *                      type: array
//  *                      items:
//  *                          $ref: '#components/schemas/User'
//  */

app.get("/users", (req, res) => {
    db.query('SELECT * from  user',
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                return res.status(200).send(result);
            }

        });
})

// /**
//  * @swagger
//  * /users/edit/:id:
//  *  put:
//  *    description: Use to request all users
//  *    responses:
//  *      '200':
//  *        description: A successful response
//  */

app.put("/users/edit/:id", (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const age = req.body.age;
    db.query('UPDATE user SET name=?,age=? WHERE uid=?', [name, age, id],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                return res.status(200).send("successfully updated");
            }

        });

})
app.delete("/users/delete/:id", (req, res) => {
    const id = req.params.id;
    // const name = req.body.name;
    // const age = req.body.age;
    db.query('delete from  user WHERE uid=?', id,
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                return res.status(200).send("successfully deleted");
            }

        });

})



app.listen(4001, () => {
    console.log("Listening to port 4001")
})


// 

// clinic flame -- node index.js 