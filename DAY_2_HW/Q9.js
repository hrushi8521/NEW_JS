class InvalidCouponCode extends Error{
    constructor(message){
        super(message)
        this.name = "InvalidCouponCode"
    }
}

function process_payment(amt, coupon_code){
    try {
        if(amt <= 0){
            throw new Error("Invalid Amount.")
        }
        if(coupon_code !== "COUPON123"){
            throw new InvalidCouponCode("The coupon used is invalid.")
        }
    } catch (error) {
        console.log(error.name + " : " + error.message);
        
    }
}

process_payment(1000, "coup")