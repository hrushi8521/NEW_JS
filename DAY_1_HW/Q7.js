const students = [
    {
        name : "Jerry",
        marks : 90
    },
    {
        name : "Mary",
        marks : 35
    },
    {
        name : "John",
        marks : 95 
    },
    {
        name : "Tom",
        marks : 70
    }
]

const filterMarks = students.filter((students)=>{
    return students.marks > 80
})

console.log(filterMarks);

