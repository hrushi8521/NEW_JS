products = ["soap", "bread", "cheese", "milk"]

soap ={
    price: 30,
    quantity: 10
}

bread = {
    price: 20,
    quantity: 20
}
cheese = {
    price: 40,
    quantity: 15
}
milk = {
    price: 25,
    quantity: 30
}

const [p1, p2, p3, p4] = products

console.log("Available products are : " + p1+" "+p2+" "+p3+" "+p4);

const {price, quantity} = bread
console.log("Price of bread : " + price);
console.log("Quantity of bread : " + quantity);





