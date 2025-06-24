number = [1,20,40,33,77]

function findMax(number){
    var largest = Math.max(...number) 
    return largest
}

console.log(findMax(number));
