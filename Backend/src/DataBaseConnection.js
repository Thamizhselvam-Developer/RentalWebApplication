const mysql  = require("mysql2")
const connect = require ("./Configuration/DbConfig.js")


createcon = mysql.createConnection(connect)


module.exports=createcon