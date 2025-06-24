function filterPassedStudents(students){
    var passed = students.filter((students)=>{
        return students > 35
    })

    console.log(passed);
    
}

var students = [10, 90, 40, 22, 36]
filterPassedStudents(students)