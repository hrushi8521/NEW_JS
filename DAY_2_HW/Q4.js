// 4 
function payment2(success){
    return new Promise((resolve, reject)=>{
        if(success){
            resolve("Payment successful !")
        }else{
            reject("Payment failed !")
        }
    })
}

async function test(){
    try {
        const result = await payment2(false);
        console.log(result);
    } catch (error) {
        console.log("Error: ", error);
        
    }
}

test()