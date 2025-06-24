function check_inventory(quantity){
   
    try {
        if(quantity < 5){
            throw new Error("Quantity below 5 units.")
        }
    } catch (error) {
        console.log(error.name + " : " + error.message);
    }
}

check_inventory(4)