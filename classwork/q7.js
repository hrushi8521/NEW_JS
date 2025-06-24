const students = [
    {
        name : "Jerry",
        sal : 90000
    },
    {
        name : "Mary",
        sal : 35000
    },
    {
        name : "John",
        sal : 95000
    },
    {
        name : "Tom",
        sal : 70000
    }
]

function aboveAverage(students){
    return students.filter((students)=>{
        return students.sal > 35000
    })
}

console.log(aboveAverage(students));
