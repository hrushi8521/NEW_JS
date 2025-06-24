function process_payment(amount){
    try {
        if( amount <=0 ){
            throw new Error("Invalid Amount ! ")
        }
    } catch (error) {
        console.log(error.name + " : " + error.message);
    }
}

process_payment(0)