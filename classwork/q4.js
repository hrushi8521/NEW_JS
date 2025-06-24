numbers = [1, 2, 3, 4, 50]

function filterEvenNumber(numbers){
    const even_num = numbers.filter((numbers)=>{
        return numbers % 2 === 0
    })

    return even_num
}

console.log(filterEvenNumber(numbers));
