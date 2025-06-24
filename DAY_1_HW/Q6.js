marks = [40, 90, 55, 89, 30]

function findTopper(marks){
    var topper = 0
    for( i=0 ; i < marks.length ; i++ ){
        if(topper < marks[i]){
            topper = marks[i]
        }
    }
    return topper
}

console.log(findTopper(marks));


// second method
// ... -> Unpack operator
// Built In function Math.max
function findMax2(marks){
    return Math.max(...marks)
}

console.log(findMax2(marks));


