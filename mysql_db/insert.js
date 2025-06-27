const db = require("./db")

function insertData(name, price){
    const sql = "insert into products(name,price) values(?,?)";
    //" "
    db.query(sql, [name, price], (err)=>{
        if(err){
            console.log(err.message);
            
        }else{
            console.log("inserted");   
        }
    })
}


function deleteData(name){
    const sql = "delete from products where name=?";
    db.query(sql, name, (err)=>{
        if(err){
            console.log(err.message);
            
        }else{
            console.log("deleted");   
        }
    })
}
// insertData("Mobile", 17000)
// deleteData("Mobile")

function updateData(name, price){
    const sql = "update products set name=? where price=?";
    //" "
    db.query(sql, [name, price], (err)=>{
        if(err){
            console.log(err.message);
            
        }else{
            console.log("updated");   
        }
    })
}

// updateData("Mobile", 129000)

function show(name){
    const sql = "select * from products where name=?"
    db.query(sql, name, (err, rows)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log(rows);
            
        }
    })
}

show("Mobile")