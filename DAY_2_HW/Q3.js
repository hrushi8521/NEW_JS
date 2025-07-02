//3 - Promise
// Demonstrate an example of a Promise that simulates fetching product details (e.g., 
// name, price, availability) from an online store's server. 
function payment(success){
    return new Promise((resolve, reject)=> {
        if(success){
            resolve("Payment successful !")
        }else{
            reject("Payment failed !")
        }
    })
}

payment(true).then(()=>{
    console.log("Payement successful! ");
}).catch((error)=>{
    console.log("Error : ", error); 
})