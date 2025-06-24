class Product{
    name
    productId
    price

    constructor(name, productId, price){
        this.name = name;
        this.productId = productId;
        this.price = price;
    }

    dissplayInfo(){
        console.log("Name : " + this.name);
        console.log("ProductId : " + this.productId);        
        console.log("Price : " + this.price);
    }
}

const p = new Product("Colgate", "A1", 20);
p.dissplayInfo();

