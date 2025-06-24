number = [1,20,40,33,77]

const a = number.map((number)=>{
    return number * number
})

console.log("Squares : ",a);

const b = number.filter((number)=>{
    return number%2 != 0
})

console.log("Odd numbers : ", b);

const c = number.reduce((number, sum)=>{
    return sum = sum + number
})

console.log("Sum : ",c);

