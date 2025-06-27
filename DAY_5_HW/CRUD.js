const db = require('./db')

function insertData(name, salary, department){
    const sql_query = "insert into students(name, salary, department) values(?,?,?) ";
    db.query(sql_query, [name, salary, department], (err)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log("Data inserted successfully.");
        }
    })
}

function updateData(name, department){
    const sql_query = "update students set department=? where name=?";
    db.query(sql_query, [department, name], (err)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log("Data Updated successfully.");            
        }
    })
}

function deleteData(name){
    const sql_query = "delete from students where name=?";
    db.query(sql_query, name, (err)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log("Data deleted successfully.");
        }
    })
}

function showData(){
    const sql_query = "select * from students";
    db.query(sql_query, (err, rows)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log(rows);
        }
    })
}


// deleteData("Tom");
// deleteData("Larry");
// deleteData("Mary");

// insertData("Tom", 40000, "HR");
// insertData("Larry", 20000, "Management");
// insertData("Mary", 50000, "HR");

showData();

updateData("Tom", "IT");
showData();
