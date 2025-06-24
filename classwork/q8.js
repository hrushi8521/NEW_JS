const x = [
    {
        name : "Jerry",
        sales : 90
    },
    {
        name : "Mary",
        sales : 35
    },
    {
        name : "John",
        sales : 95 
    },
    {
        name : "Tom",
        sales : 70
    }
]


const total = x.reduce((sum, x)=>
    sum = sum + x.sales, 0
)

console.log(total);



