const mysql = require("mysql");

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"G2"
});

conn.connect((err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("Connection established");
        
    }
})

module.exports = conn