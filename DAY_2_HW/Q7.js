function checkStock(quantity){
    if(quantity > 10){
        throw new Error("Stock unavailable ! ")
    }
}

function addToCart(quantity){
    try {
        checkStock(quantity)
    } catch (error) {
        console.log(error.name + " : " + error.message);
    }
}

addToCart(20)