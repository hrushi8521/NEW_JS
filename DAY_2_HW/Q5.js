function apply_discount(total, discount = 20){
    total -= total * (discount * 0.01)
    return total
}


function total_cost(...product_prices){
    total = product_prices.reduce((sum, price) => sum + price, 0 )

    total = apply_discount(total) 
    
    return total
}

prices = [20,90,100,40,30]

console.log("Total Cost : " + total_cost(...prices));

