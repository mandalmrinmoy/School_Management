const mysql=require("mysql2/promise")

const mysqlPool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"114@N1251sri",
    database:"school"
})

module.exports=mysqlPool