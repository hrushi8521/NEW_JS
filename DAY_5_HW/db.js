const mysql = require("mysql")

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "emp"
})

conn.connect((err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("Connection Established.");   
    }
})

module.exports = conn