// map
marks = [35, 90, 80]

const grades = marks.map((marks)=>{
    if(marks >= 90){
        return 'A'
    }
    else if (marks < 90 && marks >= 75){
        return 'B'
    }
    else if (marks < 75 && marks >=40){
        return 'C'
    }
    else{
        return 'D'
    }
})

console.log(grades);


// filter
const filtered = marks.filter((marks)=>{
    return marks > 75
})

console.log(filtered);


// reduce
const total_marks = marks.reduce((marks, sum)=>{
        return sum = marks + sum
})

console.log(total_marks);
